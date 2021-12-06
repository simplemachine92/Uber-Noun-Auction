import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="flex-wrapper">
      <div className="p-10">
        <h1 className="text-black text-4xl font-bold">Nouns DAO and Gitcoin: A Public Goods and NFT Crossover Event</h1>
        <br />
        <br />
        <ul className="text-left text-3xl space-y-10">
          <li>
            <a href="https://nouns.wtf/vote/21">How it Started</a>
          </li>
          <li>
            <a href="https://twitter.com/noun12LFG/status/1466225951549894659">The Talk on Social</a>
          </li>
          <li>
            <a href="https://medium.com/@noun12/nouns-dao-and-gitcoin-a-public-goods-and-nft-crossover-event-37bf12e12dff">
              The Medium Article
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;
