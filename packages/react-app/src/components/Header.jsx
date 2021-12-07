import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="(🤖,❤️,🎄,🏗️) A Very Nounish Gitcoinmas"
        subTitle="Made w/ scaffold-eth"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
