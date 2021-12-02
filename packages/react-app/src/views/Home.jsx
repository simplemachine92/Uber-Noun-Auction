import React from "react";
import { Row, Col, Button, Alert, Input, List, Card } from "antd";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div>
      <div className="">
        {/* <img className="logo_moonshot sub" src="ubernoun.png" /> */}
        <img className="logo_moonshot" src="austinpixelmandalla.png" />
        {/* <img className="logo_moonshot sub" src="scafftype.png" /> */}
        <h1>GITCOIN UBER-NOUN</h1>
        <br />
        <h2>AN OMEGA RARE 1/1 PFP</h2>
        <h2>
          Made in collaboration with <a href="https://nouns.wtf/">NounsDAO</a>
        </h2>
        <h2>
          Help fund <a href="https://gitcoin.co/grants/#match-pools">Gitcoin Grants Round12!</a>
        </h2>
        <h2>
          Art by{" "}
          {/* <a style={{ padding: 8 }} href="https://gitcoin.co/octaviaan">
            @octaviaan
          </a>
          /
          <a style={{ padding: 8 }} href="https://twitter.com/nowonderer">
            @nowonderer
          </a>
          /
          <a style={{ padding: 8 }} href="https://twitter.com/Ruth_chapa">
            @ruth_chapa
          </a> */}
        </h2>
        <div style={{ padding: 32 }}>
          <Button
            type="primary"
            onClick={async () => {
              //const price = await readContracts.MarsShotBots.price();
              //tx(writeContracts.MarsShotBots.requestMint({ value: priceToMint, from: address }));
            }}
          >
            PLACE BID for Ξ{/* {priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)} */}
          </Button>

          <div className="publicgoodsgood">
            <h2>❤️*100% Proceeds To Public Goods❤️</h2>
            <strong>100%</strong> of Proceeds fund Ethereum Public Goods on Gitcoin Grants
            <br />
            <strong>🦧✊🌱100%🌱✊🦧</strong>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="colorme2">
          <h4 style={{ padding: 5 }}>Why We Think Mars-Shot-Bots Rock:</h4>
          <br />
          <br />
          <ul className="rocks">
            <li>🤖🍠 These bots are the first theme-derivative spin-off to MoonShotBots!</li>
            <li>🤖👑 Oh the Novelty!</li>
            <li>🤖🌱 100% Proceeds Support Public Goods!</li>
            <li>
              🤖❤️ Hang with your marsfrens on <a href="https://discord.gg/ACKb28pSSP">Discord</a> &{" "}
              <a href="https://t.me/joinchat/v6N_GHY-8kU3ZmRh">Telegram</a>
            </li>
          </ul>
        </div>

        <div className="colorme3">
          <h4 style={{ padding: 5 }}>Testimonials:</h4>
          <br />
          <br />
          <div className="Testimonial">
            <img src="Aloof_Database.png" />
            <h5>Acidic Debug</h5>
            <p>
              01100001 01110101 01110011 01110100 01101001 01101110 00100000 01110111 01101000 01111001 00100000
              01100100 01101111
            </p>
          </div>
          <div className="Testimonial">
            <img src="Acidic_Debug.png" />
            <h5>Simpl</h5>
            <p>
              bzzz bzzz bzz new fax incoming kwwaaaaaaaaaaaaaeeeeeuuuueeuuueeuuuu **denga denga** we made our mistakes,
              but you didnt have to abandon us :(
            </p>
          </div>
          <div className="Testimonial">
            <img src="Alert_Desktop.png" />
            <h5>Alert Desktop</h5>
            <p>
              Beep Boop Bop Bop Moonshot Collective is not associated with my stupid antics Beep Boop Bot Boop Boop
              Bloop Beep Boop Boop Bloop Beep{" "}
            </p>
          </div>
        </div>
      </div>

      <div id="preview"></div>

      <footer className="colorme" style={{ padding: 64 }}>
        <h4 style={{ padding: 5 }}>FAQ</h4>
        <br />
        <br />
        <ul id="faq">
          <li>
            <p>
              <strong>🙋‍♂️ Why are there 502 Mars-Shot-Bots available?</strong>
              <br />
              Because Elon said so
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♀️ When was this project launched?</strong>
              <br />
              10/4/21 after an extensive rescue mission.
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️ Why was this project launched?</strong>
              <br />
              Simpl FOMOd cause he was priced out of MSB.
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♀️ How many can I mint?</strong>
              <br />
              You are welcome to purchase 5 Mars-Shot Bots!
              <br />
              <br />
              Karma FTW!{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️ How is the price calculated?</strong>
              <br />
              These PFPs are minted on a bonding curve that increases ~1.2% each purchase, and starts with a price of
              0.0033 ETH. Here new curvbe!:
              <br />
              <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTI29iQh565K6GykQDplsmYM9-84LB7L2dumXBe_7oaoF8lfb3L-4wgzNyur7wRKFhQBPFHLWK5S30z/pubchart?oid=202580104&format=image">
                <img
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTI29iQh565K6GykQDplsmYM9-84LB7L2dumXBe_7oaoF8lfb3L-4wgzNyur7wRKFhQBPFHLWK5S30z/pubchart?oid=202580104&format=image"
                  className="chart"
                />
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♀️Where does the ETH go when I purchase a Mars-Shot-Bots?</strong>
              <br />
              100% of funds will go to the{" "}
              <a href="https://etherscan.io/address/0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6">
                Gitcoin Grants Multisig
              </a>{" "}
              to fund public goods on Gitcoin.
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️Which Mars-Shot Bots are the rarest?</strong>
              <br />
              Mandala Bots! ~ 24 % Other rarities may bubble to the surface!
              <br />
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️ Whats the Moonshot Collective?</strong>
              <br />
              It's the prototyping workstream of the GitcoinDAO. For more information,{" "}
              <a href="https://moonshotcollective.space">click here</a>.
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️What else should we know?</strong>
              <br />
              <a href="https://gitcoin.co/grants/">Gitcoin Grants Round 12</a> starts in December! It's going to have
              new discoverability features, new checkout options, and will feature the launch of{" "}
              <a href="https://github.com/dcgtc/dgrants">dGrants</a>, the first decentralized Gitcoin Grants Round.
            </p>
          </li>
          <li>
            <p>
              <strong>🙋‍♂️I has another question, where can I get in touch?</strong>
              <br />
              Tweet at me; <a href="https://twitter.com/nowonderer">@nowonderer</a>
            </p>
          </li>
        </ul>
        <br />|
        <a style={{ padding: 8 }} href="broken">
          On OpenSea sometime soon?
        </a>
        |
        <a style={{ padding: 8 }} href="https://t.me/joinchat/v6N_GHY-8kU3ZmRh">
          Telegram
        </a>
        |
        <a style={{ padding: 8 }} href="https://discord.gg/ACKb28pSSP">
          Discord
        </a>
        |
        <a style={{ padding: 8 }} href="https://moonshotcollective.space">
          Moonshot Collective
        </a>
        | Art by{" "}
        <a style={{ padding: 8 }} href="https://gitcoin.co/octaviaan">
          @octaviaan
        </a>
        /
        <a style={{ padding: 8 }} href="https://twitter.com/nowonderer">
          @nowonderer
        </a>{" "}
        /{" "}
        <a style={{ padding: 8 }} href="https://twitter.com/Ruth_chapa">
          @ruth_chapa
        </a>
        <br />
        <img src="builtoneth.png" />
        <br />
      </footer>
    </div>
  );
}

export default Home;
