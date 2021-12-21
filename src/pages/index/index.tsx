import React from "react";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import Footer from "../../component/footer";
import Header from "../../component/header";

import "./index.less";

export default function Index() {
  return (
    <div className="index">
      <Header />
      <AtButton type="primary" circle={true}>
        支持
      </AtButton>
      <span>共建？</span>
      <AtButton type="secondary" circle={true}>
        来
      </AtButton>
      <Footer />
    </div>
  );
}
