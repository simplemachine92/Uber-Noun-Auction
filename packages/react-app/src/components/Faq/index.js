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
        Smart-Contract / Site: <a href="https://twitter.com/nowonderer">NoWonder</a>
        <br />
        Noun Artwork: <a href="https://gitcoin.co/thecydonian">thecydonian</a>
        <br />
        Proposal: <a href="https://twitter.com/noun12LFG">Noun12</a>
        <br />
        Theme: <a href="https://github.com/farque65">farque65</a>
        <br />
        <br />
        Special Thanks: <a href="https://twitter.com/owocki">Kevin Owocki</a>,{" "}
        <a href="https://twitter.com/austingriffith">Austin Griffith</a>, <br />
        <a href="https://twitter.com/Ruth_Chapa">Ruth Chapa</a>,{" "}
        <a href="https://twitter.com/codenamejason">codenameJason</a>, and lastly
        <br />
        <br />
        <a href="https://nouns.wtf/">NounsDAO for their generous contribution to GR 12, long live public goods.</a>
        <br />
        <br />
        <h4>What happens to the other Nouns?</h4>
        <br />
        <br />
        The remaining Nouns will go to winners that the Nouns community selects from each Gitcoin Grants Round 12
        category (Climate, Advocacy, Longevity, Ethereum), in a limited edition NFT crossover event.{" "}
        <a href="https://nouns.wtf/vote/21">Read More</a>
      </div>
    </div>
  );
};

export default Faq;
