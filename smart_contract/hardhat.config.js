require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wrEes3hvCW2gUrD7BbuO6IHogPX8cm_D',
      accounts: ['b5000144321ff8dbe9ab28d68a6b70c8f43ced40ba10c9334792985732f0fbcf'],
    },
  },
};