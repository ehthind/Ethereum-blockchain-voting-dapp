// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 470000,
      from: '0xa9ba62da0310ae1e0c5c22ad3f3743dc87b2642e'
    }
  }
}
