import React from "react";
import { Link, useLocation } from "react-router-dom";

import { RiPencilFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

export const NavMenu = () => {
  let location = useLocation();

  return (
    <ul className="flex justify-around my-4 mx-40">
      <Link to="/uredivanje">
        <li className="text-center">
          <div className="flex justify-center">
            <RiPencilFill
              className={`text-5xl border rounded-full px-3 py-3 ${
                location.pathname === "/uredivanje" &&
                "bg-yellow-200 bg-opacity-40 text-yellow-400"
              }`}
            />
          </div>
          <h3 className="select-none">Uređivanje</h3>
        </li>
      </Link>
      <Link to="/rezultati">
        <li className="text-center ">
          <div className="flex justify-center">
            <GoGraph
              className={`text-5xl border rounded-full py-3 ${
                location.pathname === "/rezultati" &&
                "bg-yellow-200 bg-opacity-40 text-yellow-400"
              }`}
            />
          </div>
          <h3 className="select-none">Rezultati</h3>
        </li>
      </Link>
    </ul>
  );
};
