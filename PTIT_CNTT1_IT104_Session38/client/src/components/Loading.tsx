import React from "react";
import { Flex, Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "#f9fafc",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

export default function Loading() {
  return (
    <Flex
      gap="middle"
      vertical
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Flex gap="middle">
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      </Flex>
    </Flex>
  );
}
