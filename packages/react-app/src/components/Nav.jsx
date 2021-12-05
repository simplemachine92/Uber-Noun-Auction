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
    <Row className="p-10">
      <Col span={8}>
        <Link to="/">
          {blink ? (
            <img src="cornerLogo2.svg" alt="Top Logo" className="h-32" />
          ) : (
            <img src="cornerLogo.svg" alt="Top Logo" className="h-32" />
          )}
        </Link>
      </Col>
      <Col span={8}>
        {props.pageTitle ? props.pageTitle : ""}
        {props.pageSubTitle ? props.pageSubTitle : ""}
      </Col>
      <Col span={8}>
        <div className="inline-flex">
          <Button
            style={{
              verticalAlign: "top",
              marginLeft: 8,
              marginTop: 4,
              border: 0,
              fontSize: 20,
              color: "black",
              onHover: "#2B891C",
            }}
          >
            nouns
          </Button>
          <Button
            style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4, border: 0, fontSize: 20, color: "black" }}
          >
            about us
          </Button>
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
      </Col>
    </Row>
  );
}
