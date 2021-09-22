const rewardLocker = artifacts.require("RewardLocker");
const token = artifacts.require("OasisToken");


module.exports = function(deployer) {
    deployer.deploy(rewardLocker);

};
