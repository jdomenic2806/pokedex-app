import React, { useEffect, useState } from "react";

export const SearchHeader = () => {
  const [isHome, setIsHome] = useState(false);
  return (
    <div className="row pt-5">
      <div className="col-7"></div>
      <div className="col-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control inputSearch borderShadow no-extras"
            placeholder="Search"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btnSearch borderShadow"
              type="button"
            >
              <img src="/assets/Icons/Search.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
