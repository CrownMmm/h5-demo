import React from "react";
import Taro from "@tarojs/taro";

import { AtIcon } from "taro-ui";
import "taro-ui/dist/style/components/icon.scss";
import "./index.less";

const BOTTOM_BANNER_INFO = [
  {
    title: "主页",
    icon: "menu",
    page: "index"
  },
  {
    title: "列表",
    icon: "bullet-list",
    page: "todolist"
  },
  {
    title: "计数器",
    icon: "clock",
    page: "counter"
  },
  {
    title: "换肤",
    icon: "heart",
    page: "changeColor"
  }
];

export default function Footer() {
  const toPage = page => {
    Taro.redirectTo({
      url: `/pages/${page}/index`
    });
  };
  return (
    <div className="footer">
      {BOTTOM_BANNER_INFO.map((item, index) => {
        return (
          <div
            className="footerBox"
            onClick={() => toPage(item.page)}
            key={index}
          >
            <AtIcon value={item.icon} size="30"></AtIcon>
            <span className="footerTitle">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
