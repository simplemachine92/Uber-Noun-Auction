import { utils, ethers } from "ethers";
import { Row, Card, Col, Image, Button, Divider } from "antd";
import React, { useState, useEffect } from "react";
import "./Auction.css";

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
  const cardStyle = {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    marginBottom: 20,
    background: "rgb(29, 112, 18,1)",
  };

  return (
    <div className="flex-wrapper">
      <div className="p-200 margin-top 20">
        <Row gutter={2}>
          <img className="logo_moonshot" src="ubernoun.png" />
          <Col span={14}>
            <div style={{ paddingLeft: 40, paddingTop: 0, paddingRight: 0 }}>
              <h1>😈 👹 1/1 PFP, EVER, FOREVER, LET THE GAMES BEGIN 👹 😈 </h1>
              <Card style={cardStyle} title="" bordered={false}>
                <h4>DUTCH AUCTION STARTS AT Ξ9,999,999</h4>
                <h2>DECREASING BY Ξ16.534 / Second</h2>

                <Button
                  type="primary"
                  onClick={async () => {
                    tx(writeContracts.GTC_UBER_NOUN.requestBuy({ value: priceToMint }));
                  }}
                >
                  MINT Ξ {priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}
                </Button>
                <br />
                <h4>JUST PRESS THE BUTTON, ANON, AAAAAAHAHAHA</h4>
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
    </div>

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
