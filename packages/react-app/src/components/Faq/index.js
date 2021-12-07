import React from "react";
import { Collapse } from "antd";
import "./Faq.css";
import { white } from "chalk";

const Faq = () => {
  return (
    <div className="bg-gray-100 flex-wrapper">
      <div className="bg-gray-100 p-200 margin-top 40">
        <br />
        <h4>faq</h4>
        <br />
        <br />
        <img className="p-400" src="allnouns.jpg" />
        <br />
        <h4>What the heck is this?</h4>
        <br />
        <br />
        This is a collaborative experiment between Gitcoin and NounsDAO. If you would like more information
        <br />
        <a href="https://nouns.wtf/vote/21">Click Here</a>
        <br />
        <br />
        <h4>Authors: </h4>
        <br />
        <br />
        Contract / Auction / Concept: <a href="https://twitter.com/nowonderer">NoWonder</a>
        <br />
        Proposal: <a href="https://twitter.com/noun12LFG">Noun12</a>
        <br />
        Uber-Noun Artwork: <a href="https://gitcoin.co/thecydonian">thecydonian</a>
        <br />
        <br />
        <h4>What happens to the other Nouns?</h4>
        <br />
        <br />
        The remaining Nouns will go to winners that the Nouns community selects from each Gitcoin Grants Round 12
        category (Climate, Advocacy, Longevity, Ethereum), in a limited edition NFT crossover event.
        <br />
        <br />
        <a href="https://nouns.wtf/vote/21">Read More</a>
      </div>
    </div>
  );
};

export default Faq;
