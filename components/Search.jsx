"use client";
import React from "react";
import { useState } from "react";
const Search = ({ placeholder, classname }) => {
  const [search, setSearch] = useState();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          handleChange(e);
        }}
        className={classname}
      />
    </div>
  );
};

export default Search;
