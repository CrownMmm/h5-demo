import React from "react";
import { AtIcon } from "taro-ui";
import "taro-ui/dist/style/components/icon.scss";
import "./index.less";

const BOTTOM_BANNER_INFO = [
  {
    title: "主页",
    icon: "menu"
  },
  {
    title: "列表",
    icon: "bullet-list"
  },
  {
    title: "计数器",
    icon: "clock"
  },
  {
    title: "换肤",
    icon: "heart"
  }
];

export default function Footer() {
  return (
    <div className="header footer">
      {BOTTOM_BANNER_INFO.map(item => {
        return (
          <div className="footerBox">
            <AtIcon value={item.icon} size="30"></AtIcon>
            <span className="footerTitle">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
