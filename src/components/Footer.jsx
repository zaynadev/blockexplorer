import React from "react";
import logo from "./../assets/images/logo-etherscan.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list mt-30">
                <h4 className="title">Menu</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list mt-30">
                <h4 className="title">PAPERS</h4>
                <ul>
                  <li>
                    <a href="#">White Paper</a>
                  </li>
                  <li>
                    <a href="#">Technical Paper</a>
                  </li>
                  <li>
                    <a href="#">One Pager</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list mt-30">
                <h4 className="title">legal</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list mt-30">
                <h4 className="title">Subscribe</h4>
                <form action="#">
                  <div className="input-box input-footer">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fa fa-arrow-right" style={{ color: "white" }}></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex justify-content-between align-items-center">
                <img src={logo} alt="" style={{ height: "50px" }} />
                <ul className="order-1 order-sm-2">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-paper-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-btc"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
