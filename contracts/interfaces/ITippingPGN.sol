// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { AssetType } from "../enums/IDrissEnums.sol";

interface ITippingPGN {
    function sendTo(
        address _recipient,
        uint256 _amount,
        string memory _message
    ) external payable;

    function sendTokenTo(
        address _recipient,
        uint256 _amount,
        address _tokenContractAddr,
        string memory _message
    ) external payable;

}