import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import back from "./assets/images/abstract-shapes-20.svg";
import Block from "./components/Block";
import { formatDate } from "./utils";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blocks, setBlocks] = useState([]);
  const [ready, setReady] = useState(false);

  async function getLastBlocks() {
    const lastBlockNumber = await alchemy.core.getBlockNumber();
    const blocks = [];
    for (let i = 1; i <= 10; i++) {
      const block = await alchemy.core.getBlock(+lastBlockNumber - i);
      blocks.push({
        number: block.number,
        miner: block.miner,
        txCount: block.transactions.length,
        timestamp: formatDate(Date(+block.timestamp)),
      });
    }
    setBlocks(blocks);
    setReady(true);
  }
  useEffect(() => {
    getLastBlocks();
  }, []);

  useEffect(() => {
    ready &&
      alchemy.ws.on("block", async (blockNumber) => {
        const block = await alchemy.core.getBlock(blockNumber);
        const b = [
          {
            number: block.number,
            miner: block.miner,
            txCount: block.transactions.length,
            timestamp: formatDate(Date(+block.timestamp)),
          },
          ...blocks,
        ];

        b.pop();
        setBlocks(b);
      });
  }, [ready]);

  return (
    <section
      style={{
        backgroundPosition: "center",
        zIndex: -1,
        paddingTop: "10px",
        paddingBottom: "100px",
        width: "100%",
        backgroundImage: `url(${back})`,
      }}
    >
      <Header alchemy={alchemy} />

      <div className="row justify-content-center">
        <Block blocks={blocks} />
      </div>
    </section>
  );
}

export default App;
