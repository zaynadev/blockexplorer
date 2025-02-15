import React, { useContext } from "react";
import { ExplorerContext } from "../context";
import back from "./../assets/images/abstract-shapes-20.svg";
import Blocks from "./Blocks";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Transactions from "./Transactions";

const Main = () => {
  const { alchemy, blocks, transactions } = useContext(ExplorerContext);
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Main;
