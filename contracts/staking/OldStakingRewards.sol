// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {DistributionContract} from "../lib/DistributionContract.sol";

contract OldStakingRewards  is DistributionContract {
    // 3 month cliff/linear release
    constructor(address token)
        DistributionContract(
            token,
            1643328000, // Jan 28th 00:00 UTC
            0 // 0 months
        )
    {}
}
