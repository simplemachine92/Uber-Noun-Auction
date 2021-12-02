pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GTC_UBER_NOUN is ERC721 {
    address payable public constant gitcoin =
     payable(0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6);

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public startingPrice = 9999999 ether;
    uint256 private constant limit = 1;
    uint256 private constant priceDeductionRate = 16.534 ether;
    uint256 public startAt = block.timestamp;
    uint256 public mintDeadline = block.timestamp + 7 days;

    event Wtf(address winner, uint amount);

    constructor() ERC721("GTC UBER-NOUN", "GUN") {
      //R U 'RAY' ANON? AAAAAAAAHAHAHHAHAHHAAHAH
    }

    function priceInDays(uint256 numDays) public view returns (uint256) {
      uint256 totalSecs = numDays * 86400;
      uint256 deduction = totalSecs * priceDeductionRate;
      uint256 futurePrice = currentPrice() - deduction;

        return futurePrice;
    }

    function currentPrice() public view returns (uint256) {

    uint256 timeElapsed = block.timestamp - startAt;
    uint256 deduction = priceDeductionRate * timeElapsed;
    uint256 price = startingPrice - deduction;

    return price;
    }

    function buy() public payable returns (uint256) {
        require(
          _tokenIds.current() < limit, "DONE MINTING BOTS"
          );

        require(
          block.timestamp < mintDeadline, "auction expired"
          );

        require(
          msg.value >= currentPrice(), "ETH < price"
          );

        (bool success, ) = gitcoin.call{value: msg.value}("");
        require(success, "could not send");

        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);

        emit Wtf(msg.sender, msg.value);

        return id;
    }
}