const masterChef = artifacts.require("MasterChef");
const rewardLocker = artifacts.require("RewardLocker");
const token = artifacts.require("OasisToken");


module.exports = function(deployer) {

  deployer.deploy(masterChef,token.address,32,rewardLocker.address, "0xdF490FA4b71C2B651Df95827bAAB750dac665dD6","0xdF490FA4b71C2B651Df95827bAAB750dac665dD6");
};
