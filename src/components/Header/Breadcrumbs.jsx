import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export const Breadcrumbs = () => {
  const surveyName = useSelector((state) => state.breadcrumb);
  let location = useLocation();

  return (
    <div className="flex mt-4 space-x-2">
      <p>
        <Link to="/">Ankete / </Link>
      </p>
      {<p className="text-yellow-400">{surveyName.title}</p>}
    </div>
  );
};
