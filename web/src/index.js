import React from "react";
import ReactDOM from "react-dom";
import { Spin } from "antd";
import App from "./App";
import Home from "./Home/Home";
import Auth from "./Auth/Layout";

ReactDOM.render(
  <Spin size="large">
    <div style={{ width: "100%", height: "100vh" }} />
  </Spin>,
  document.getElementById("root")
);

const appPages = ["user", "problem", "contest", "news", "rank"];

const SwitchPage = () => {
  const pathname = window.location.pathname.split("/");
  if (pathname.includes("account")) {
    return <Auth />;
  } else if (appPages.some(page => pathname.includes(page))) {
    return <App />;
  } else {
    return <Home />;
  }
};

ReactDOM.render(SwitchPage(), document.getElementById("root"));
