import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import SingleCategory from "./SingleCategory";

function CategoryList() {
  const {categories} = useUser();

  return (
    <div className="row g-5 category-listing-wrapper">
      {categories.map((category,index) => (
       <SingleCategory key={index} category={category}/>
      ))}
    </div>
  );
}

export default CategoryList;
