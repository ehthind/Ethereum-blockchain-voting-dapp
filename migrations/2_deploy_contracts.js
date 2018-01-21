// Import voting contract
var Voting = artifacts.require("./Voting.sol");

// Deploys contract given, contract name, constructor arguments, and gas
module.exports = (deployer) => {
  deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 6700000});
};
