pragma solidity ^0.8.6;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {MultiPartRLEToSVG} from "../nouns_contracts/libs/MultiPartRLEToSVG.sol";
import {NFTDescriptor} from "../nouns_contracts/libs/NFTDescriptor.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GTC_UBER_NOUN is ERC721 {
    string public daName;

    string public description;

    // They said gg but it was bg
    string public daBackground;

    // Noun Bodies (Custom RLE)
    bytes[] public gunParts;

    mapping(uint8 => string[]) public palette;

    address payable public constant gitcoin =
        payable(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6);

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public startingPrice = 9999999 ether;
    uint256 private constant limit = 1;
    uint256 private constant priceDeductionRate = 16.534 ether;
    uint256 public startAt = block.timestamp;
    uint256 public mintDeadline = block.timestamp + 7 days;

    event Wtf(address winner, uint256 amount);

    constructor(
        bytes memory _gunBody,
        bytes memory _gunCessory,
        bytes memory _gunHead,
        bytes memory _gunGlasses,
        string memory _name,
        string memory _description,
        string[] memory _palette
    ) ERC721("GTC UBER-NOUN", "GUN") {
        //R U 'RAY' ANON? AAAAAAAAHAHAHHAHAHHAAHAH
        gunParts.push(_gunBody);
        gunParts.push(_gunCessory);
        gunParts.push(_gunHead);
        gunParts.push(_gunGlasses);
        daName = _name;
        description = _description;
        palette[0] = _palette;
    }

    /**
     * @notice Return the assembled 1/1 in parts
     */
    function _assembleTheGUN() internal view returns (bytes[] memory) {
        bytes[] memory _parts = new bytes[](4);
        _parts[0] = gunParts[0];
        _parts[1] = gunParts[1];
        _parts[2] = gunParts[2];
        _parts[3] = gunParts[3];
        return _parts;
    }

    /**
     * @notice Given a name, description, and seed, construct a base64 encoded data URI.
     */
    function genericDataURI() public view returns (string memory) {
        NFTDescriptor.TokenURIParams memory params = NFTDescriptor
            .TokenURIParams({
                name: daName,
                description: description,
                parts: _assembleTheGUN(),
                background: daBackground
            });
        return NFTDescriptor.constructTokenURI(params, palette);
    }

    /**
     * @notice Given a seed, construct a base64 encoded SVG image.
     */
    function generateSVGImage() external view returns (string memory) {
        MultiPartRLEToSVG.SVGParams memory params = MultiPartRLEToSVG
            .SVGParams({parts: _assembleTheGUN(), background: daBackground});
        return NFTDescriptor.generateSVGImage(params, palette);
    }

    function currentPrice() public view returns (uint256) {
        uint256 timeElapsed = block.timestamp - startAt;
        uint256 deduction = priceDeductionRate * timeElapsed;
        uint256 price = startingPrice - deduction;

        return price;
    }

    function buy() public payable returns (uint256) {
        require(_tokenIds.current() < limit, "DONE MINTING BOTS");

        require(block.timestamp < mintDeadline, "auction expired");

        require(msg.value >= currentPrice(), "ETH < price");

        (bool success, ) = gitcoin.call{value: msg.value}("");
        require(success, "could not send");

        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);

        emit Wtf(msg.sender, msg.value);

        return id;
    }
}
