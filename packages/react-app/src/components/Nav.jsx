import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { useInterval } from "../hooks";
import Account from "./Account";

export default function Nav(props) {
  const [blink, setBlink] = useState();
  useInterval(() => {
    setBlink(!blink);
  }, 1000);
  return (
    <header class="text-gray-600 body-font">
      <div class="container w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          {blink ? (
            <img src="cornerLogo2.svg" alt="Top Logo" className="h-32" />
          ) : (
            <img src="cornerLogo.svg" alt="Top Logo" className="h-32" />
          )}
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">nouns</a>
          <a class="mr-5 hover:text-gray-900">about us</a>
          <a class="mr-5 hover:text-gray-900">
            {" "}
            <div className="inline-flex">
              <Account
                address={props.address}
                localProvider={props.localProvider}
                userSigner={props.userSigner}
                mainnetProvider={props.mainnetProvider}
                price={props.price}
                web3Modal={props.web3Modal}
                loadWeb3Modal={props.loadWeb3Modal}
                logoutOfWeb3Modal={props.logoutOfWeb3Modal}
                blockExplorer={props.blockExplorer}
                networkDisplay={props.networkDisplay}
                isWalletConnected={props.isWalletConnected}
              />
              {props.faucetHint}
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
}
