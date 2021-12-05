// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");
const { head } = require("ramda");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let body =
    "0x0016171f0905020903030203030104020505030202020302060304020603030102010603000506020001060103010201060a000106010302060a000206020501000102010602030200010201030106020301020103010001020106020302000102010301060203010201030100010202060103020001020103010602030102010301000106010401050106020003060203";
  let accessory =
    "0x00011f1e010f0001060e000e000106010001060d000f0001060e001e001c000108010002000106190001080100020001061800010801000108020601000206170001080100020001061900010801001a00010803001e001e001e001e001e0018000102050017000102010001020400180001020500010001021c000102010002021a00010001021c001e001e001e001e001e00030001081a00020001080100010817000106010003000108170001060100010603000108180001060100";
  let head =
    "0x000216140a01060b0001060b0001060b00010602000502010302000106010601000402040301000106010604020603010601060302070301060302090302020a0301020b0301020b0301020b0302020a03030209030100020208030100010001050206010503060105010601050100010002050306010503060105010001000102090401000100040206030100";
  let glasses =
    "0x0009170e0703000606010006060300010602070201010601000106020702010106040602070201030602070201010601060200010602070201010601000106020702010106010602000106020702010106010001060207020101060300060601000606";
  let name = "GTC UBER-NOUN";
  let description = "1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN";
  let palette = [
    "",
    "000000",
    "f13e87",
    "8145d2",
    "00b083",
    "00d2a2",
    "442484",
    "ffffff",
    "00d6ca",
  ];

  let background = "b294ed";

  await deploy("GTC_UBER_NOUN", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // prettier-ignore
    args: [body,
    accessory,
    head,
    glasses,
    name,
    description,
    background,
    palette],
    log: true,
  });

  // Getting a previously deployed contract
  const YourContract = await ethers.getContract("GTC_UBER_NOUN", deployer);
  /*  await YourContract.setPurpose("Hello");
  
    To take ownership of yourContract using the ownable library uncomment next line and add the 
    address you want to be the owner. 
    // yourContract.transferOwnership(YOUR_ADDRESS_HERE);

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

  // Verify your contracts with Etherscan
  // You don't want to verify on localhost
  /* if (chainId !== localChainId) {
    await run("verify:verify", {
      address: YourContract.address,
      contract: "contracts/YourContract.sol:YourContract",
      contractArguments: [],
    });
  } */
};
module.exports.tags = ["YourContract"];
