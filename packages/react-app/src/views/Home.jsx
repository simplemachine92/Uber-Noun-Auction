import React from "react";
import { Row, Col, Button, Alert, Input, List, Card } from "antd";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { Auction, Footer, Faq } from "../components";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ writeContracts, readContracts, priceToMint, tx }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  return (
    <div>
      <Auction writeContracts={writeContracts} readContracts={readContracts} priceToMint={priceToMint} tx={tx} />
      <div className="bg-gray-100">
        <Row>
          <Col span={12} offset={6}>
            <Faq />
          </Col>
        </Row>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
