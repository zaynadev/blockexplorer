import { createContext, useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { formatDate, formatTimeAgo } from "./utils";

export const ExplorerContext = createContext();

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const ExplorerProvider = ({ children }) => {
  const alchemy = new Alchemy(settings);
  const [blocks, setBlocks] = useState([]);
  const [lastBlock, setLastBlock] = useState(undefined);
  const [transactions, setTransactions] = useState([]);
  const [blockReady, setBlockReady] = useState(false);

  async function getLastBlocks() {
    const lastBlockNumber = await alchemy.core.getBlockNumber();
    setLastBlock(lastBlockNumber);
    const blocks = [];
    for (let i = 1; i <= 7; i++) {
      const block = await alchemy.core.getBlockWithTransactions(+lastBlockNumber - i);
      blocks.push({
        number: block.number,
        miner: block.miner,
        txCount: block.transactions.length,
        timestamp: formatDate(+block.timestamp),
        timeAgo: formatTimeAgo(+block.timestamp),
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
        setLastBlock(blockNumber);
        const block = await alchemy.core.getBlockWithTransactions(blockNumber);
        const b = {
          number: block.number,
          miner: block.miner,
          txCount: block.transactions.length,
          timestamp: formatDate(+block.timestamp),
          timeAgo: formatTimeAgo(+block.timestamp),
          transactions: block.transactions.slice(0, 10),
        };
        setBlocks((prev) => [b, ...prev]);
        setTransactions(block.transactions.slice(0, 10));
      });
  }, [blockReady]);
  return (
    <ExplorerContext.Provider value={{ alchemy, blocks, transactions, lastBlock }}>{children}</ExplorerContext.Provider>
  );
};
