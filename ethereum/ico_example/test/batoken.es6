const BAToken = artifacts.require("./BAToken.sol");

contract('BAToken', (accounts) => {
  it('should not be finalized', () => {
    return BAToken.deployed().then((instance) => {
      return instance.isFinalized();
    }).then((isFinalized) => {
      assert.isFalse(isFinalized, 'BA token should not be finalized to begin with.');
    });
  });

  it('should have zero balance for all accounts to begin with', () => {
    let ba;
    return BAToken.deployed().then((instance) => {
      ba = instance;
      return ba.balanceOf.call(accounts[0]);
    }).then((balance) => {
      assert.equal(balance.toNumber(), 0, "starting balance should be 0");
    });
  });

  it('should have a non-zero balance after sending ETH', () => {
    let ba, exchangeRate;
    const sender = accounts[0];
    const ethToDeposit = 10;

    return BAToken.deployed().then((instance) => {
      ba = instance;
      return ba.tokenExchangeRate();
    }).then((rate) => {
      exchangeRate = rate;
      return ba.createTokens({from: sender, value: ethToDeposit});
    }).then(
      () => ba.balanceOf.call(sender)
    ).then((balance) => {
      const expectedBalance = balance.toNumber() / exchangeRate;
      assert.equal(expectedBalance, ethToDeposit);
    });
  });

  it('should fail if you send more than the max contribution', () => {
    let ba, exchangeRate;
    const sender = accounts[1];
    const ethToDeposit = 21;

    return BAToken.deployed().then((instance) => {
      ba = instance;
      return ba.tokenExchangeRate();
    }).then((rate) => {
      exchangeRate = rate;
      return ba.createTokens({from: sender, value: ethToDeposit});
    }).then(() => {
      assert(false, 'transaction should have thrown');
    }).catch((err) => {
      assert.equal(err.message, 'VM Exception while processing transaction: invalid opcode');
    });
  });
});
