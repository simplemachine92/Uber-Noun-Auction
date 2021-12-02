import { utils } from "ethers";
import { Row, Card, Col, Image } from "antd";
import React, { useState } from "react";
import { Address, Balance, Events } from "../components";

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
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");

  const cardStyle = {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
  };

  return (
    <div className="">
      <Row gutter={8}>
        <img className="logo_moonshot" src="austinpixelmandalla.png" />
        <Col span={15}>
          <h1>GTC UBER-NOUN</h1>
          <div style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
            <Card style={cardStyle} title="Card title" bordered={false}>
              <Balance />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}
