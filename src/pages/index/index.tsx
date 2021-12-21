import React from "react";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入

import Layout from "../layout";

import "./index.less";

export default function Index() {
  return (
    <div className="index">
      <Layout>
        <div>
          <AtButton type="primary" circle={true}>
            支持
          </AtButton>
          <span>共建？</span>
          <AtButton type="secondary" circle={true}>
            来
          </AtButton>
        </div>
      </Layout>
    </div>
  );
}
