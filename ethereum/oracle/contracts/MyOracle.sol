pragma solidity ^0.4.10;
import "./SafeMath.sol";

contract MyOracle is SafeMath {
  function set(uint _value) {
    value = _value;
  }

  function get() constant returns (uint) {
    return value;
  }

  uint value;
}
