import React from "react";
import { useSelector, UseSelector } from "react-redux";

const GrandSonBox = () => {
  let count = useSelector((state) => state.count);
  return <div>grandsonbox {count}</div>;
};

export default GrandSonBox;
