import { utils, ethers } from "ethers";
import { Row, Card, Col, Image, Button, Divider } from "antd";
import React, { useState } from "react";
import { Address, Balance, Events } from "../components";
import { gray } from "chalk";

export default function AuctionCard({
  purpose,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  priceToMint,
}) {
  const cardStyle = {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    marginBottom: 20,
    background: "rgb(84,216,208,.8)",
  };

  const innerStyle = {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    background: "rgb(84,216,208,.8)",
  };

  return (
    <div className="App">
      <Row gutter={8}>
        <img className="logo_moonshot" src="ubernoun.png" />
        <Col span={15}>
          <h1>GTC UBER-NOUN</h1>
          <div style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
            <Card style={cardStyle} title="😈 👹 1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN 👹 😈 " bordered={false}>
              <h4>DUTCH AUCTION STARTING AT Ξ9,999,999</h4>
              <h2>DECREASING BY Ξ16.534 / Second</h2>
              <Button
                type="primary"
                onClick={async () => {
                  tx(writeContracts.GTC_UBER_NOUN.requestBuy({ value: priceToMint }));
                }}
              >
                ON-CHAIN MINT for Ξ{priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}
              </Button>
              <br />
              <h4>JUST PRESS THE BUTTON, ANON, AAAAAAHAHAHAAHAHHAA</h4>
              <h2>❤️ 100% Proceeds To Public Goods ❤️</h2>
              <h2>❤️ and 100% On-Chain ❤️</h2>
              <h2>
                Seriously, you can <a href="placeholder">read the contract</a>
              </h2>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}
