import React from "react";
import { Utils } from "alchemy-sdk";
import loading from "./../assets/images/loading.gif";
import { Link } from "react-router-dom";

const Transactions = ({ transactions }) => {
  return (
    <div className="son_transactions col-md-6">
      <div className="card" style={{ borderRadius: "10px 10px 0px 0px" }}>
        <div
          className="card-header"
          style={{ padding: "1rem 1rem;border-bottom:0px", borderBottom: "0px", borderRadius: " 10px 10px 0px 0px" }}
        >
          <h2 className="card-header-title">Latest Transactions</h2>
        </div>
      </div>

      <div id="scroll">
        <div id="scroll-part">
          <div className="skeleton">
            <ul id="scroll-part-container" className="transferler_data">
              {transactions.length > 0 ? (
                transactions.map((transaction, i) => (
                  <li key={transaction.hash + i} className="newrow">
                    <div className="row" style={{ padding: "10px 0px 10px 9px" }}>
                      <div className="col-sm-4">
                        <div className="media align-items-sm-center mr-4 mb-1 mb-sm-0">
                          <div className="d-none d-sm-flex mr-2">
                            <span className="scroll-row-icon-block font-size-1 font-weight-500">
                              <span className="scroll-row-icon-text font-size-1 font-weight-500 fontfamily-1">Tx</span>
                            </span>
                          </div>
                          <div className="media-body">
                            <Link to={`transaction/${transaction.hash}`}>{transaction.hash.slice(0, 10)} ...</Link>
                            <span className="d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap">
                              a few seconds ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="d-flex justify-content-between">
                          <div className="text-nowrap">
                            <span className="d-block mb-1 mb-sm-0">
                              From{" "}
                              <a className="hash-tag" href="#">
                                &nbsp; {transaction.from.slice(0, 15)} ...
                              </a>
                            </span>
                            <span className="d-block mb-1 mb-sm-0">
                              To{" "}
                              <a className="hash-tag" href="#">
                                &nbsp; {transaction.to.slice(0, 15)} ...
                              </a>
                            </span>
                          </div>
                          <div className="d-sm-block">
                            <span
                              className="scroll-row-1-1-right-reward-content fontfamily-1 font-weight-500 font-size-4"
                              style={{ margin: "3px 6px 0px 0px" }}
                            >
                              {Utils.formatEther(transaction.value.toString())} Eth
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ margin: 0 }} />
                  </li>
                ))
              ) : (
                <img src={loading} alt="loading" style={{ display: "flex", margin: "0 auto" }} />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
