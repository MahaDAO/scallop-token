// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {DistributionContract} from "../lib/DistributionContract.sol";

contract ScallopTeamDistribution is DistributionContract {
    constructor(address token)
        DistributionContract(
            token,
            1667260800, // Feb 1st 2022 00:00 UTC
            365 // 12 months
        )
    {}
}
