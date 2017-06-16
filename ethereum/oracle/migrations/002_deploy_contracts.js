const SafeMath = artifacts.require('./SafeMath.sol');
const MyOracle = artifacts.require('./MyOracle.sol');

module.exports = (deployer) => {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, MyOracle);
  deployer.deploy(MyOracle);
};
