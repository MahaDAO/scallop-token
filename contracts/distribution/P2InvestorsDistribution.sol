// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {DistributionContract} from "../lib/DistributionContract.sol";

contract P2InvestorsDistribution is DistributionContract {
    // 3 month cliff/linear release
    constructor(address token)
        DistributionContract(
            token,
            1643328000, // Jan 28th 00:00 UTC
            90 // 3 months
        )
    {}
}
