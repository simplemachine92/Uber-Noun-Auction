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
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    marginBottom: 20,
    background: "#439974",
  };

  return (
    <div className="">
      <h3>Auction concluded</h3>
      <br></br>
      <h3>Congrats to MomusCollection</h3>
      <img className="logo_moonshot" src="together.png" />
      <br></br>
      <h3>
        <a href="https://opensea.io/assets/0x18535414aeb2993e8e2cab33147413a3d6b0194c/5">
          Click here to see the Uber Nounbot on OpenSea!
        </a>
      </h3>
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
    //                 tx(writeContracts.GTC_UBER_NOUNS.buy({ value: priceToMint }));
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
