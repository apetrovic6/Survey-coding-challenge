import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Breadcrumbs = () => {
  let location = useLocation();

  return (
    <div className="flex mt-4 space-x-2">
      <p>
        <Link to="/">Ankete</Link>
      </p>
      {<p className="text-yellow-400">{location.pathname}</p>}
    </div>
  );
};
