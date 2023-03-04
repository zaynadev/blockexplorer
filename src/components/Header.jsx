import React, { useContext, useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";
import ethereum1 from "./../assets/images/ethereum-1.svg";
import icon51 from "./../assets/images/icon-51.svg";
import icon21 from "./../assets/images/icon-2-1.svg";
import axios from "axios";
import { ExplorerContext } from "../context";

const etherscanKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
const url = `https://api.etherscan.io/api?apikey=${etherscanKey}`;
const Header = () => {
  const [ethPrice, setEthPrice] = useState(undefined);
  const [gasPrice, setGasPrice] = useState(undefined);
  const { alchemy, lastBlock } = useContext(ExplorerContext);

  async function getEthPrice() {
    try {
      const {
        data: {
          result: { ethusd },
        },
      } = await axios.get(`${url}&action=ethprice&module=stats`);
      setEthPrice(ethusd);
      return ethusd;
    } catch (err) {
      console.log(`getEthPrice: ${err}`);
    }
  }

  async function getGasPrice() {
    const result = await alchemy.core.getGasPrice();
    // console.log({ result: Math.ceil(Utils.formatUnits(result, "gwei")) });
    setGasPrice(Math.ceil(Utils.formatUnits(result, "gwei")));
  }

  useEffect(() => {
    getEthPrice();
    getGasPrice();
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="card-deck">
        {/* ********** */}
        <div className="card bilgi">
          <div className="card-body" style={{ padding: "0.3rem" }}>
            <div className="media align-items-center">
              <img src={ethereum1} className="card-img-top img-adjusted img-header" />
              <div className="media-body header-body ">
                <h2 className="font-size-1 text-uppercase mb-0">ETHER PRICE</h2>
                <a className="text-size-1 text-link textRoll textRoll1">
                  <span id="eth_usd">{ethPrice ? ethPrice + " $" : "..."}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ********** */}
        <div className="card bilgi">
          <div className="card-body" style={{ padding: "0.3rem" }}>
            <div className="media align-items-center">
              <img src={icon51} className="card-img-top img-adjusted img-header" />
              <div className="media-body header-body ">
                <h2 className="font-size-1 text-uppercase mb-0">Latest block</h2>
                <a className="text-size-1 text-link textRoll textRoll1">
                  <span id="eth_usd">{lastBlock ? lastBlock : "..."}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ********** */}
        <div className="card bilgi">
          <div className="card-body" style={{ padding: "0.3rem" }}>
            <div className="media align-items-center">
              <img src={icon21} className="card-img-top img-adjusted img-header" />
              <div className="media-body header-body ">
                <h2 className="font-size-1 text-uppercase mb-0">Gas Prise</h2>
                <a className="text-size-1 text-link textRoll textRoll1">
                  <span id="difficulty">{gasPrice ? gasPrice : "..."}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
