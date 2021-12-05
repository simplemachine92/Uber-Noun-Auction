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
            header="ROADMAP"
            key="ROADMAP_1"
            extra={<PlusOutlined style={{ color: "black" }} />}
            showArrow={false}
          >
            Test
          </Panel>
          <Panel
            style={{ color: "black", background: "black" }}
            header="ABOUT US"
            key="ABOUTUS"
            extra={<PlusOutlined style={{ color: "black" }} />}
            showArrow={false}
          >
            Test
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Faq;
