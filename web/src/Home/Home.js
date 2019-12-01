import React from "react";
import store from "store";
import Introduction from "./Introduction";
import Honor from "./Honor";
import Developer from "./Developer";
import Footer from "../App/Footer";
import logoImg from "../resources/logo.png";
import "./index.less";

function IndexLayout() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="logo" height="50px" />
          </a>
        </div>
        <div className="header">
          <a href="#honor" className="menuTag">
            Honor
          </a>
          <a href="#developer" className="menuTag">
            Developer
          </a>
          <div
            className="menuTag loginButton"
            onClick={() => {
              store.set("page", "account");
              window.location.href = "account/login";
            }}
          >
            Sign in
          </div>
        </div>
      </nav>
      <div className="content" style={{ scrollBehavior: "smooth" }}>
        <div id="introduction">
          <Introduction />
        </div>
        <div id="honor">
          <Honor />
        </div>
        <div id="developer">
          <Developer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndexLayout;
