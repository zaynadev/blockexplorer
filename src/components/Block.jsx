import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ExplorerContext } from "../context";
import { formatDate, formatTimeAgo, timeAgo } from "../utils";
import back from "./../assets/images/abstract-shapes-20.svg";
import Loading from "./Loading";

const Block = () => {
  const { number } = useParams();
  const { alchemy } = useContext(ExplorerContext);
  const [block, setBlock] = useState(undefined);

  async function getBlock() {
    const blockData = await alchemy.core.getBlock(+number);
    setBlock(blockData);
    console.log({ blockData });
  }

  useEffect(() => {
    getBlock();
  }, []);

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
      <div className="container">
        <div className="container py-3">
          <div className="d-sm-flex align-items-center">
            <div className="mb-2 mb-sm-0">
              <h1 className="h4 mb-0" style={{ color: "#f7f7f7", fontSize: "30px", fontWeight: "500" }}>
                Block{" "}
                <span style={{ fontSize: "17px", color: "#cbcbcb" }} id="blockTitle">
                  #{number}
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
            <div className="tab-content" style={{ minHeight: "555px" }}>
              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                <div id="ContentPlaceHolder1_maintable" className="card-body">
                  <div className="row align-items-center mt-1">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Block Height:
                    </div>
                    <div className="col-md-9">
                      <div className="d-flex">
                        <span className="font-weight-sm-bold mr-2" id="number">
                          {block ? block.number : <Loading />}
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
                  <hr className="hr-space mb-2" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Transactions:
                    </div>
                    <div className="col-md-9">
                      <a className="u-label u-label--value u-label--primary rounded my-1" href="#" id="transactions">
                        {block ? `${block.transactions.length} transactions` : <Loading />}
                      </a>
                    </div>
                  </div>
                  <hr className="hr-space mt-2" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Mined by:
                    </div>
                    <div className="col-md-9">
                      <a href="#" id="miner" style={{ wordBreak: "break-all" }}>
                        {block ? block.miner : <Loading />}
                      </a>
                    </div>
                  </div>

                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Difficulty:
                    </div>
                    <div className="col-md-9" id="difficulty">
                      {block ? block.difficulty : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Gas Used:
                    </div>
                    <div className="col-md-9 d-flex align-items-center" id="gasUsed">
                      {block ? block.gasUsed.toString() : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space hr-gasTarget-bottom" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Gas Limit:
                    </div>
                    <div className="col-md-9" id="gasLimit">
                      {block ? block.gasLimit.toString() : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Base Fee Per Gas:
                    </div>
                    <div className="col-md-9" id="baseFeePerGas">
                      {block ? block.baseFeePerGas.toString() : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Extra Data:
                    </div>
                    <div className="col-md-9" id="extraData">
                      {block ? block.extraData : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Hash:
                    </div>
                    <div className="col-md-9" id="hash">
                      {block ? block.hash : <Loading />}
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Parent Hash:
                    </div>
                    <div className="col-md-9">
                      <a href="#" id="parentHash" style={{ wordBreak: "break-all" }}>
                        {block ? block.parentHash : <Loading />}
                      </a>
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i className="fa fa-question-circle text-secondary mr-1"></i>Nonce:
                    </div>
                    <div className="col-md-9" id="nonce">
                      {block ? parseInt(block.nonce) : <Loading />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block;
