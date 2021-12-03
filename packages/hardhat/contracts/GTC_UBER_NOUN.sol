pragma solidity ^0.8.6;
//SPDX-License-Identifier: MIT

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Base64} from "base64-sol/base64.sol";
import {NFTDescriptor} from "../nouns_contracts/libs/NFTDescriptor.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GTC_UBER_NOUN is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    using Strings for uint256;

    struct SVGParams {
        bytes[] parts;
        string background;
    }

    struct ContentBounds {
        uint8 top;
        uint8 right;
        uint8 bottom;
        uint8 left;
    }

    struct Rect {
        uint8 length;
        uint8 colorIndex;
    }

    struct DecodedImage {
        uint8 paletteIndex;
        ContentBounds bounds;
        Rect[] rects;
    }

    struct TokenURIParams {
        string name;
        string description;
        bytes[] parts;
        string background;
    }

    address payable public constant gitcoin =
        payable(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6);

    uint256 public startingPrice = 1000 ether;
    uint256 private constant limit = 1;
    uint256 private constant priceDeductionRate = 16.534 ether;
    uint256 public startAt = block.timestamp;
    uint256 public mintDeadline = block.timestamp + 7 days;

    string public daName;

    //string public uberSVG;

    //bytes public uberURI;

    string public description;

    string public background;

    // They said gg but it was bg
    string public daBackground;

    bytes[] public gunParts;

    mapping(uint8 => string[]) public gunPalette;

    event Wtf(address winner, uint256 amount);

    constructor(
        bytes memory _gunBody,
        bytes memory _gunCessory,
        bytes memory _gunHead,
        bytes memory _gunGlasses,
        string memory _name,
        string memory _description,
        string memory _background,
        string[] memory _palette
    ) ERC721("GTC UBER-NOUN", "GUN") {
        //R U 'RAY' ANON? AAAAAAAAHAHAHHAHAHHAAHAH
        gunParts.push(_gunBody);
        gunParts.push(_gunCessory);
        gunParts.push(_gunHead);
        gunParts.push(_gunGlasses);
        daName = _name;
        description = _description;
        background = _background;
        gunPalette[0] = _palette;

        //generateSVG(params, gunPalette);
        //constructTokenURI(daName, description, uberSVG);
    }

    function generateSVG(
        SVGParams memory params,
        mapping(uint8 => string[]) storage palettes
    ) internal view returns (string memory) {
        // prettier-ignore
        return string(
            abi.encodePacked(
                '<svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">',
                '<rect width="100%" height="100%" fill="#', params.background, '" />',
                _generateSVGRects(params, palettes),
                '</svg>'
            )
        );
    }

    /**
     * @notice Given RLE image parts and color palettes, generate SVG rects.
     */
    // prettier-ignore
    function _generateSVGRects(SVGParams memory params, mapping(uint8 => string[]) storage palettes)
        private
        view
        returns (string memory svg)
    {
        string[33] memory lookup = [
            '0', '10', '20', '30', '40', '50', '60', '70', 
            '80', '90', '100', '110', '120', '130', '140', '150', 
            '160', '170', '180', '190', '200', '210', '220', '230', 
            '240', '250', '260', '270', '280', '290', '300', '310',
            '320' 
        ];
        string memory rects;
        for (uint8 p = 0; p < params.parts.length; p++) {
            DecodedImage memory image = _decodeRLEImage(params.parts[p]);
            string[] storage palette = palettes[image.paletteIndex];
            uint256 currentX = image.bounds.left;
            uint256 currentY = image.bounds.top;
            uint256 cursor;
            string[16] memory buffer;

            string memory part;
            for (uint256 i = 0; i < image.rects.length; i++) {
                Rect memory rect = image.rects[i];
                if (rect.colorIndex != 0) {
                    buffer[cursor] = lookup[rect.length];          // width
                    buffer[cursor + 1] = lookup[currentX];         // x
                    buffer[cursor + 2] = lookup[currentY];         // y
                    buffer[cursor + 3] = palette[rect.colorIndex]; // color

                    cursor += 4;

                    if (cursor >= 16) {
                        part = string(abi.encodePacked(part, _getChunk(cursor, buffer)));
                        cursor = 0;
                    }
                }

                currentX += rect.length;
                if (currentX == image.bounds.right) {
                    currentX = image.bounds.left;
                    currentY++;
                }
            }

            if (cursor != 0) {
                part = string(abi.encodePacked(part, _getChunk(cursor, buffer)));
            }
            rects = string(abi.encodePacked(rects, part));
        }
        return rects;
    }

    /**
     * @notice Return a string that consists of all rects in the provided `buffer`.
     */
    // prettier-ignore
    function _getChunk(uint256 cursor, string[16] memory buffer) private pure returns (string memory) {
        string memory chunk;
        for (uint256 i = 0; i < cursor; i += 4) {
            chunk = string(
                abi.encodePacked(
                    chunk,
                    '<rect width="', buffer[i], '" height="10" x="', buffer[i + 1], '" y="', buffer[i + 2], '" fill="#', buffer[i + 3], '" />'
                )
            );
        }
        return chunk;
    }

    /**
     * @notice Decode a single RLE compressed image into a `DecodedImage`.
     */
    function _decodeRLEImage(bytes memory image)
        private
        pure
        returns (DecodedImage memory)
    {
        uint8 paletteIndex = uint8(image[0]);
        ContentBounds memory bounds = ContentBounds({
            top: uint8(image[1]),
            right: uint8(image[2]),
            bottom: uint8(image[3]),
            left: uint8(image[4])
        });

        uint256 cursor;
        Rect[] memory rects = new Rect[]((image.length - 5) / 2);
        for (uint256 i = 5; i < image.length; i += 2) {
            rects[cursor] = Rect({
                length: uint8(image[i]),
                colorIndex: uint8(image[i + 1])
            });
            cursor++;
        }
        return
            DecodedImage({
                paletteIndex: paletteIndex,
                bounds: bounds,
                rects: rects
            });
    }

    /**
     * @notice Construct an ERC721 token URI.
     */
    function constructTokenURI() internal view returns (string memory) {
        // prettier-ignore

        SVGParams memory params = SVGParams({
            parts: gunParts,
            background: background
        });

        TokenURIParams memory tokenParams = TokenURIParams({
            name: daName,
            description: description,
            parts: gunParts,
            background: background
        });

        string memory _uberSVG = generateSVG(params, gunPalette);

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                tokenParams.name,
                                '", "description":"',
                                tokenParams.description,
                                '", "image": "',
                                "data:image/svg+xml;base64,",
                                _uberSVG,
                                '"}'
                            )
                        )
                    )
                )
            );
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

        constructTokenURI();

        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);
        _setTokenURI(id, constructTokenURI());

        emit Wtf(msg.sender, msg.value);

        return id;
    }
}
