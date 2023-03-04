import { Alchemy, Network, AlchemySubscription } from "alchemy-sdk";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import back from "./assets/images/abstract-shapes-20.svg";
import { formatDate } from "./utils";
import { Blocks, Transactions } from "./components";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [blockReady, setBlockReady] = useState(false);

  async function getLastBlocks() {
    const lastBlockNumber = await alchemy.core.getBlockNumber();
    const blocks = [];
    for (let i = 1; i <= 10; i++) {
      const block = await alchemy.core.getBlockWithTransactions(+lastBlockNumber - i);
      blocks.push({
        number: block.number,
        miner: block.miner,
        txCount: block.transactions.length,
        timestamp: formatDate(Date(+block.timestamp)),
        transactions: block.transactions.slice(0, 10),
      });
    }
    setBlocks(blocks);
    setBlockReady(true);
  }

  useEffect(() => {
    getLastBlocks();
  }, []);

  useEffect(() => {
    blockReady && setTransactions(blocks[0].transactions);
    blockReady &&
      alchemy.ws.on("block", async (blockNumber) => {
        const block = await alchemy.core.getBlockWithTransactions(blockNumber);
        const b = {
          number: block.number,
          miner: block.miner,
          txCount: block.transactions.length,
          timestamp: formatDate(Date(+block.timestamp)),
          transactions: block.transactions.slice(0, 10),
        };
        setBlocks((prev) => [b, ...prev]);
        setTransactions(block.transactions.slice(0, 10));
      });
  }, [blockReady]);

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
      <div className="container">
        <div className="row justify-content-center">
          <Blocks blocks={blocks} />
          <Transactions transactions={transactions} />
        </div>
      </div>
    </section>
  );
}

export default App;
