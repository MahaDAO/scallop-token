// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {VestingContract} from "../lib/VestingContract.sol";

contract AdvisorsVesting is VestingContract {
    constructor(address token, address beneficiary)
        VestingContract(token, beneficiary, 1639699200, 0, 94608000)
    {
        // do nothing
    }
}
