// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");
const { head } = require("ramda");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let body =
    "0x0015171f090e020e020e020e02020201000b02020201000b02020201000b02020201000b02020201000b02020201000b02020201000b02";
  let accessory =
    "0x0015181e080200020408000204020001000104020501040600010402050104010001000104010501060105010404000104010501060105010401000104050504040505010401040105010602050204020502040205010601050104010404050204020502040405010401040205010602050404020501060205010401000104030501040400010403050104010001000204010501040600010401050204010002000204080002040200";
  let head =
    "0x00011a170502000107120002000107120002000107120002000107030009070300010702000200050701080101010901010109020105070200020001070108020908010409010702000200010702090a010108020901070200020001070109090101090201020901070200030701090d010108030701070101010701090e0101070101010701070101010701090e0101070101010701070101010701090e010107010901070107010901070f0101070109010703070f010307020001070f0101070200020001070e010109010702000200010701090d010109010702000200010701080d0101090107020002000107020a0107090a0107020a0107020002000107030a0107040a0407030a0107020002000107040a0407070a0107020002000407090a0407020005000b070500";
  let glasses =
    "0x000b171007030006030100060303000103020b010c020301000103020b010c02030403020b0103020c0203020b0103020c0403020b0103020c0203020b0103020c010302000103020b010c020301000103020b010c02030300060301000603";
  let name = "GTC UBER-NOUN";
  let description = "1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN";
  let palette = [
    "",
    "ffffff",
    "068940",
    "000000",
    "144f52",
    "298489",
    "2ed2db",
    "1e2b37",
    "7a7a7a",
    "d3d3d3",
    "45bc9d",
    "37d188",
    "c937d1",
  ];

  let background = "d5d7e1";

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
