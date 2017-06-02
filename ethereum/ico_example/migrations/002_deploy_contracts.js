const BN = require('../node_modules/bn.js');
const HttpProvider = require('../node_modules/ethjs-provider-http');
const Eth = require('../node_modules/ethjs-query');
const eth = new Eth(new HttpProvider('http://localhost:8545'));
const StandardToken = artifacts.require('./StandardToken.sol');
const SafeMath = artifacts.require('./SafeMath.sol');
const BAToken = artifacts.require('./BAToken.sol');

module.exports = (deployer) => {
  deployer.deploy(StandardToken);
  deployer.link(StandardToken, BAToken);
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, BAToken);

  let companyFundAddress, userFundAddress, startingBlockNumber, endingBlockNumber;
  eth.accounts().then((accounts) => {
    companyFundAddress = accounts[1];
    userFundAddress = accounts[2];
    return eth.blockNumber();
  }).then((blockNumber) => {
    startingBlockNumber = new BN(1);
    endingBlockNumber = blockNumber.add(new BN(100));
    deployer.deploy(BAToken, companyFundAddress, userFundAddress, startingBlockNumber, endingBlockNumber);
  });
};
