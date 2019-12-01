import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default () => {
  const menuItems = [
    { title: "Problem", key: "/problem" },
    { title: "Contest", key: "/contest" },
    { title: "Rank", key: "/rank" },
    { title: "News", key: "/news" },
  ];
  function getDefaultKey() {
    const pathname = window.location.pathname.split("/");
    const currentTab = menuItems.filter(item => pathname.includes(String.prototype.toLocaleLowerCase.call(item.title)));
    if (currentTab.length === 0) {
      window.location.href = "/";
    }
    return currentTab[0].key;
  }

  return (
    <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }} defaultSelectedKeys={getDefaultKey()}>
      {menuItems.map(element => (
        <Menu.Item key={element.key}>
          <Link to={element.key}>{element.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
