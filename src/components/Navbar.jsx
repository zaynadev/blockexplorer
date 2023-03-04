import React from "react";
import logo from "./../assets/images/logo-etherscan.svg";

const Navbar = () => {
  return (
    <header className="header-area">
      <div className="header-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <a className="navbar-brand" href="index.html">
                    <img src={logo} style={{ height: "35px" }} alt="" />
                  </a>{" "}
                  {/*  logo  */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>{" "}
                  {/*  navbar toggler  */}
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                          <i className="fa fa-home"></i> &nbsp;&nbsp;Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fa fa-cubes"></i> &nbsp;&nbsp;Blocks <i className="fa fa-angle-down"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fa fa-exchange-alt"></i> &nbsp;&nbsp;Transactions{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fa fa-coins"></i> &nbsp;&nbsp;Tokens <i className="fa fa-angle-down"></i>
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                  {/*  navbar collapse  */}
                </nav>
              </div>{" "}
              {/*  navigation  */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
