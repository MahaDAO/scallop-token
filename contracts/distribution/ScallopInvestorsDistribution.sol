// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {DistributionContract} from "../lib/DistributionContract.sol";

contract ScallopInvestorsDistribution is DistributionContract {
    // 3 month cliff/linear release
    constructor(address token)
        DistributionContract(
            token,
            1643328000, // Jan 28th 2022 00:00 UTC
            90 // 3 months
        )
    {}
}
