import React from "react";

export const Container = ({ children, styling }) => {
  return <div className={`shadow-lg  max-w-7xl ${styling}`}>{children}</div>;
};
