import React from "react";

import { Breadcrumbs } from "./Breadcrumbs";
export const Header = ({ children }) => {
  return (
    <ul>
      <li>
        <header className="border-l-4 border-yellow-400 ">
          <h1 className="mx-2">{children}</h1>
        </header>
      </li>
      <li>
        <Breadcrumbs />
      </li>
    </ul>
  );
};
