import React from "react";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default function Index() {
  return (
    <div className="index">
      <span>Hello world!</span>
      <AtButton type="primary">I need Taro UI</AtButton>
      <span>Taro UI 支持 Vue 了吗？</span>
      <AtButton type="primary" circle={true}>
        支持
      </AtButton>
      <span>共建？</span>
      <AtButton type="secondary" circle={true}>
        来
      </AtButton>
    </div>
  );
}
