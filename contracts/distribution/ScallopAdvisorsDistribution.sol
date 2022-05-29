// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {DistributionContract} from "../lib/DistributionContract.sol";

contract ScallopAdvisorsDistribution is DistributionContract {
    constructor(address token)
        DistributionContract(
            token,
            1643673600, // Feb 1st 2022 00:00 UTC
            365 // 12 months
        )
    {}
}
