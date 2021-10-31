// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {VestingContract} from "../lib/VestingContract.sol";

contract AdvisorsVesting is VestingContract {
    // 3 month cliff/linear release for 12 months (15 months total)
    constructor(address token, address beneficiary)
        VestingContract(token, beneficiary, 86400 * 30 * 3, 0, 86400 * 30 * 12)
    {}
}
