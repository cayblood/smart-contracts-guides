pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BAToken.sol";

contract TestBAToken {
  function testNewBATokenNotFinalized() {
    BAToken ba = BAToken(DeployedAddresses.BAToken());
    Assert.isFalse(ba.isFinalized(), "Contract should not be finalized to begin with.");
  }
}
