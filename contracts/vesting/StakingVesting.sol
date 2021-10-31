// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {VestingContract} from "../lib/VestingContract.sol";

contract StakingVesting is VestingContract {
    // Linear over 36 months
    constructor(address token, address beneficiary)
        VestingContract(token, beneficiary, 0, 0, 86400 * 30 * 36)
    {}
}
