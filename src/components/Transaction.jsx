import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Utils } from "alchemy-sdk";

import { ExplorerContext } from "../context";
import { formatDate, formatTimeAgo, timeAgo } from "../utils";
import back from "./../assets/images/abstract-shapes-20.svg";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Transaction = () => {
  const { hash } = useParams();
  const { alchemy } = useContext(ExplorerContext);
  const [transaction, setTransaction] = useState(undefined);
  const [block, setBlock] = useState(undefined);

  async function getTransaction() {
    const txData = await alchemy.transact.getTransaction(hash);
    const blockData = await alchemy.core.getBlock(txData.blockNumber);
    setTransaction(txData);
    setBlock(blockData);
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <>
      <Navbar />
      <section
        style={{
          backgroundPosition: "center",
          zIndex: -1,
          paddingTop: "100px",
          paddingBottom: "100px",
          width: "100%",
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="container">
          <div className="container py-3">
            <div className="d-sm-flex align-items-center">
              <div className="mb-2 mb-sm-0">
                <h1 className="h4 mb-0" style={{ color: "#f7f7f7", fontSize: "30px", fontWeight: "500" }}>
                  Transaction{" "}
                  <span style={{ fontSize: "17px", color: "#cbcbcb" }} id="blockTitle">
                    #{hash}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginBottom: "70px" }}>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center p-0">
                <ul
                  className="nav nav-custom nav-borderless nav_tabs1"
                  id="nav_tabs"
                  role="tablist"
                  style={{ height: "30px" }}
                >
                  <li className="nav-item"></li>
                  <li className="nav-item"></li>
                </ul>
              </div>
              <div className="tab-content" style={{ minHeight: "355px" }}>
                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                  <div id="ContentPlaceHolder1_maintable" className="card-body">
                    <div className="row align-items-center mt-1">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Transaction Hash:
                      </div>
                      <div className="col-md-9">
                        <div className="d-flex">
                          <span className="font-weight-sm-bold mr-2" id="number">
                            {transaction ? transaction.hash : <Loading />}
                          </span>
                          <a className="btn btn-xs btn-icon btn-soft-info mr-1" href="#" id="numberleft">
                            <i className="fa fa-chevron-left btn-icon__inner"></i>
                          </a>
                          <a className="btn btn-xs btn-icon btn-soft-info mr-1" href="#" id="numberright">
                            <i className="fa fa-chevron-right btn-icon__inner"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr className="hr-space" />

                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Status:
                      </div>
                      <div className="col-md-9">
                        <a className="u-label u-label--value u-label--primary rounded my-1" href="#" id="transactions">
                          {transaction ? (
                            transaction.confirmations > 0 ? (
                              <span className="badge badge-success">Success</span>
                            ) : (
                              <span className="badge badge-danger">Failure</span>
                            )
                          ) : (
                            <Loading />
                          )}
                        </a>
                      </div>
                    </div>
                    <hr className="hr-space" />

                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Block:
                      </div>
                      <div className="col-md-9">
                        <Link
                          className="u-label u-label--value u-label--primary rounded my-1"
                          to={`/block/${transaction ? transaction.blockNumber : "#"}`}
                          id="transactions"
                        >
                          {transaction ? transaction.blockNumber : <Loading />}
                        </Link>
                      </div>
                    </div>

                    <hr className="hr-space mb-2" />
                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Timestamp:
                      </div>
                      <div className="col-md-9">
                        <i className="far fa-clock small mr-1"></i>
                        <span id="timestamp">
                          {block ? formatTimeAgo(block.timestamp) : <Loading />}
                          {block && <span>&nbsp;&nbsp;&nbsp; {formatDate(+block.timestamp)}</span>}
                        </span>
                      </div>
                    </div>
                    <hr className="hr-space mt-2" />
                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>From:
                      </div>
                      <div className="col-md-9">
                        <a href="#" id="miner" style={{ wordBreak: "break-all" }}>
                          {transaction ? transaction.from : <Loading />}
                        </a>
                      </div>
                    </div>

                    <hr className="hr-space" />
                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>to:
                      </div>
                      <div className="col-md-9" id="difficulty">
                        <a href="#" id="miner" style={{ wordBreak: "break-all" }}>
                          {transaction ? transaction.to : <Loading />}
                        </a>
                      </div>
                    </div>
                    <hr className="hr-space" />
                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Gas Price:
                      </div>
                      <div className="col-md-9 d-flex align-items-center" id="gasUsed">
                        {transaction ? `${Utils.formatUnits(transaction.gasPrice.toString(), 9)} Gwei` : <Loading />}
                      </div>
                    </div>
                    <hr className="hr-space" />
                    <div className="row align-items-center">
                      <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                        <i className="fa fa-question-circle text-secondary mr-1"></i>Value:
                      </div>
                      <div className="col-md-9 d-flex align-items-center" id="gasUsed">
                        {transaction ? `${Utils.formatEther(transaction.value.toString())} ETH` : <Loading />}
                      </div>
                    </div>

                    <hr className="hr-space" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Transaction;
