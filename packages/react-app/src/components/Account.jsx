import { Button, Row, Col, Badge } from "antd";
import React from "react";
import Address from "./Address";
import Balance from "./Balance";
import Wallet from "./Wallet";

/*
  ~ What it does? ~

  Displays an Address, Balance, and Wallet as one Account component,
  also allows users to log in to existing accounts and log out

  ~ How can I use? ~

  <Account
    address={address}
    localProvider={localProvider}
    userProvider={userProvider}
    mainnetProvider={mainnetProvider}
    price={price}
    web3Modal={web3Modal}
    loadWeb3Modal={loadWeb3Modal}
    logoutOfWeb3Modal={logoutOfWeb3Modal}
    blockExplorer={blockExplorer}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to the given address
  - Provide localProvider={localProvider} to access balance on local network
  - Provide userProvider={userProvider} to display a wallet
  - Provide mainnetProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide price={price} of ether and get your balance converted to dollars
  - Provide web3Modal={web3Modal}, loadWeb3Modal={loadWeb3Modal}, logoutOfWeb3Modal={logoutOfWeb3Modal}
              to be able to log in/log out to/from existing accounts
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
*/

export default function Account({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isWalletConnected,
}) {
  return (
    <div class="container mx-auto flex flex-wrap flex-col sm:flex-row">
      <span class="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
        {address ? (
          <div className="flex flex-wrap flex-row">
            <a class="text-gray-500">
              {isWalletConnected ? (
                <div className="rounded-full bg-green-500 w-5 h-5"></div>
              ) : (
                <div className="rounded-full bg-red-500 w-5 h-5"></div>
              )}
            </a>
            <Address
              address={address}
              ensProvider={mainnetProvider}
              blockExplorer={blockExplorer}
              isWalletConnected={isWalletConnected}
            />
          </div>
        ) : (
          ""
        )}

        {web3Modal &&
          (web3Modal?.cachedProvider ? (
            <a class="ml-6 hover:text-gray-900" onClick={logoutOfWeb3Modal}>
              disconnet
            </a>
          ) : (
            <a class="ml-6 hover:text-gray-900" onClick={loadWeb3Modal}>
              connect wallet
            </a>
          ))}
      </span>
    </div>
  );
}
