require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XhvXFGYJAtDocQtK9OFEpp86Lq02ooZP',
      accounts: ['3b9cdd8278a58e6c9afdc138a318db811cda5c3b18024ec769a611eaf849d8ff'],
    },
  },
};