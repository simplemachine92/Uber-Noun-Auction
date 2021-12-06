import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { PlusOutlined } from "@ant-design/icons";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="flex-wrapper">
      <div className="p-10">
        <h1 className="text-black">Faq</h1>
        <Collapse style={{ border: 0 }}>
          <Panel
            style={{ color: "black", background: "black" }}
            header="What the heck is this?"
            key="ROADMAP_1"
            extra={<PlusOutlined style={{ color: "black" }} />}
            showArrow={false}
          >
            This is a collaborative experiment between Gitcoin and NounsDAO. If you would like more information
            <br />
            <a href="https://nouns.wtf/vote/21">Click Here</a>
          </Panel>
          <Panel
            style={{ color: "black", background: "black" }}
            header="ABOUT US"
            key="ABOUTUS"
            extra={<PlusOutlined style={{ color: "black" }} />}
            showArrow={false}
          >
            Authors:
            <br />
            Contract / Auction / Concept: <a href="https://twitter.com/nowonderer">NoWonder</a>
            <br />
            Proposal:<a href="https://twitter.com/noun12LFG">Noun12</a>
            <br />
            Uber-Noun Artwork: <a href="https://gitcoin.co/thecydonian">thecydonian</a>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Faq;
