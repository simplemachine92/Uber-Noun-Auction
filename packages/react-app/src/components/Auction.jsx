import { utils, ethers } from "ethers";
import { Row, Card, Col, Image, Button, Divider } from "antd";
import React, { useState, useEffect } from "react";
import CeramicClient from "@ceramicnetwork/http-client";
import { usePoller } from "eth-hooks";

const API_URL = "https://ceramic-clay.3boxlabs.com";
const ceramic = new CeramicClient(API_URL);

const streamId = "kjzl6cwe1jw149ev0o0tt1txv9bck274btx01p4v3mc81a2opka6lwzozcdly2s";

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

  const [stream, setStream] = useState();
  // prettier-ignore
  usePoller(async () => {
      var ourStream = await ceramic.loadStream(streamId);
      setStream((ourStream.state$.state$.value.content.Foo))
      console.log(stream)
  }, 15000);

  useEffect(async () => {
    var ourStream = await ceramic.loadStream(streamId);
    setStream(ourStream.state$.state$.value.content.Foo);
    console.log(stream);
  }, []);

  return (
    <div className="">
      <Row gutter={6}>
        <img className="logo_moonshot" src={stream} />
        <Col span={14}>
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
