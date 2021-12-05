import { utils, ethers } from "ethers";
import { Row, Card, Col, Image, Button, Divider } from "antd";
import React, { useState, useEffect } from "react";
import "./Auction.css";
import CeramicClient from "@ceramicnetwork/http-client";
import { usePoller } from "eth-hooks";

const API_URL = "https://ceramic-clay.3boxlabs.com";
const ceramic = new CeramicClient(API_URL);

const streamId = "kjzl6cwe1jw149ev0o0tt1txv9bck274btx01p4v3mc81a2opka6lwzozcdly2s";

export default function Auction({
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
  const [stream, setStream] = useState();
  // prettier-ignore
  usePoller(async () => {
      var ourStream = await ceramic.loadStream(streamId);
      setStream(ourStream.state$.state$.value.content.Foo);
  }, 15000);

  useEffect(async () => {
    var ourStream = await ceramic.loadStream(streamId);
    setStream(ourStream.state$.state$.value.content.Foo);
  }, []);

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-1/3 h-64 object-cover object-center rounded">
            <div className="h-56"></div>
            <img className="logo_moonshot" src={stream} />
          </div>
          <div class="w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="bg-gift1 h-56 bg-no-repeat bg-cover container relative">
              <div className="top-sign top-sign-border bottom-0">
                <span className="text-red-xmas font-bold">GTC</span>{" "}
                <span className="text-green-xmas font-bold">UBER</span>
                <span className="text-red-xmas font-bold">-</span>
                <span className="text-green-xmas font-bold">NOUN</span>
              </div>
            </div>
            <div className="bg-gift2 h-56 bg-no-repeat bg-cover">
              <h1>😈 👹 1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN 👹 😈</h1>
              <Button
                type="primary"
                onClick={async () => {
                  tx(writeContracts.GTC_UBER_NOUN.requestBuy({ value: priceToMint }));
                }}
              >
                MINT for Ξ{priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}
              </Button>
              <h1 className="mx-auto text-xl p-6 border-8 border-blue-500 bg-blue-teal">
                DUTCH AUCTION STARTING AT Ξ9,999,999
              </h1>
              <h1 className="mx-auto text-xl p-6 border-8 border-blue-500 bg-blue-teal">
                DECREASING BY Ξ16.534 / Second
              </h1>
            </div>
            <div className="h-20 bg-blue-dark-blue border-8 border-black"></div>
            <div className="h-56 bg-blue-dark-blue border-8 border-black p-10">
              <h1 className="mx-auto text-xl p-6 border-8 border-blue-500 bg-blue-teal">
                100% Proceeds To Public Goods
              </h1>
              <h1 className="bg-blue-teal border-8 border-gray-500 mx-auto text-xl">and 100% On-Chain</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="App">
    //   <Row gutter={8}>
    //     <Col span={15}>
    //       <h1>GTC UBER-NOUN</h1>
    //       <div style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
    //         <Card style={cardStyle} title="😈 👹 1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN 👹 😈 " bordered={false}>
    //           <h4>DUTCH AUCTION STARTING AT Ξ9,999,999</h4>
    //           <h2>DECREASING BY Ξ16.534 / Second</h2>

    //           <h2>❤️ 100% Proceeds To Public Goods ❤️</h2>
    //           <h2>
    //             Seriously, you can <a href="placeholder">read the contract</a>
    //           </h2>
    //           <div className="bg-gift1 h-44 bg-no-repeat bg-cover w-1/2"></div>
    //           <div className="bg-gift2 h-56 bg-no-repeat bg-cover w-1/2">
    //             <Button
    //               type="primary"
    //               onClick={async () => {
    //                 tx(writeContracts.GTC_UBER_NOUN.buy({ value: priceToMint }));
    //               }}
    //             >
    //               MINT for Ξ{priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}
    //             </Button>
    //             <h1 className="mx-auto text-xl p-6 border-8 border-blue-500 bg-blue-teal">
    //               DUTCH AUCTION STARTING AT Ξ9,999,999
    //             </h1>
    //           </div>
    //           <div className="h-20 bg-blue-dark-blue border-8 border-black w-1/2"></div>
    //           <div className="h-56 bg-blue-dark-blue border-8 border-black w-1/2 p-10">
    //             <h1 className="mx-auto text-xl p-6 border-8 border-blue-500 bg-blue-teal">
    //               100% Proceeds To Public Goods
    //             </h1>
    //             <h1 className="bg-blue-teal border-8 border-gray-500 mx-auto text-xl">and 100% On-Chain</h1>
    //           </div>
    //         </Card>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
}
