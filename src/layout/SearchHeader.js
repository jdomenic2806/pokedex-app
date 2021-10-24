import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

export const SearchHeader = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div className="row pt-5">
      <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7"></div>
      <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Search... "
              onChange={handleSearch}
            />
            <a href="#" className="search_icon" onClick={() => history.push('/detail/' + search)}>
              <img src="/assets/Icons/Search.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
