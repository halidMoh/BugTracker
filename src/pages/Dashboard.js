import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../features/bug/bugSlice";
export const Dashboard = () => {
  const items = useSelector((state) => [selectAllBugs(state)]);
  console.log("Dashboard Items", items);
  return <div>Dashboard</div>;
};
