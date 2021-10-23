// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./lib/ERC20.sol";
import "./lib/Pausable.sol";
import "./lib/ERC20Permit.sol";

/**
 * Implementation of the Scallop token
 */
contract ScallopToken is ERC20, Pausable, ERC20Permit {
    bool public initialized = false;

    constructor() {}

    function initialize(address owner) external payable {
        require(!initialized, "already initialized");

        initializeERC20("ScallopX", "SCLP");
        initializePausable();
        initializeERC20Permit("ScallopX");

        _mint(owner, 100000000 * 1e18); // mint 100 mil SCLP tokens
        _unpause(); // unpause the contract
        initialized = true;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
        require(!paused(), "ERC20Pausable: token transfer while paused");
    }
}
