const FixedSwap = artifacts.require("FixedSwap");
const token = artifacts.require("OasisToken");

//const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(FixedSwap, token.address,909000000000000,'125000000000000000000000',1631627489,1631627729,1,'418000000000000000000',false,0,1,false);
 // deployer.link(ConvertLib, MetaCoin);
 // deployer.deploy(MetaCoin);
};
