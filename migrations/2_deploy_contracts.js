var MyContract = artifacts.require("./EDISON_Token.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
