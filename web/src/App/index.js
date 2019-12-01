import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logoImg from "../resources/logo.png";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import Problem from "../Problem";
import Contest from "../Contest";
import Rank from "../Rank";
import News from "../News";
import User from "../User";

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Header>
          <a href="/problem" style={{ float: "left" }}>
            <img src={logoImg} alt="logo" height="60px" width="150px" />
          </a>
          <TopMenu />
        </Layout.Header>
        <Layout.Content>
          <Switch>
            <Route path="/problem" component={Problem} />
            <Route path="/contest" component={Contest} />
            <Route path="/rank" component={Rank} />
            <Route path="/news" component={News} />
            <Route path="/user/:user" component={User} />
          </Switch>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
