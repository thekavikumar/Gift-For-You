// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

contract Gifter {
    uint256 public totalGifts;
    string public message = "Happy New Year!";
    string public name = "Anonymous";
    address payable owner;

    struct Gift {
        address sender;
        string message;
        string name;
        uint256 timestamp;
        uint256 amount;
    }

    Gift[] gifts;

    constructor() {
        owner = payable(msg.sender);
    }

    function getTotalGifts() public view returns (uint256) {
        return totalGifts;
    }

    function sendGift() public payable {
        require(msg.sender.balance >= msg.value, "You don't have enough funds");
        (bool success, ) = owner.call{value: msg.value}("");
        require(success, "Transfer failed");
        totalGifts += 1;
        gifts.push(Gift(msg.sender, message, name, block.timestamp, msg.value));
    }

    function getAllGifts() public view returns (Gift[] memory) {
        return gifts;
    }
}
