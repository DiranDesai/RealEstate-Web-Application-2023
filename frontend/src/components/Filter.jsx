import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import useUser from "../hooks/useUser";
import LocationInputComponent from "./LocationInputComponent";
import PriceRangeSlider from "./PriceRangeSlider";
import useNotify from "../hooks/useNotify";
import { SHOW_NOTIFY } from "../context/types";
import MessageComponent from "./MessageComponent";
import FilterBuy from "./FilterBuy";
import FilterRent from "./FilterRent";
import FilterSell from "./FilterSell";
import FilterRentOut from "./FilterRentOut";

function Filter() {
  const {dispatch, error, payloadData} = useNotify();
  const {filterStatus} = useUser();
  
  return (
    <>
      {error && <MessageComponent payloadData={payloadData} />}
    <div className="filter filter-wrapper">
      <FilterTabs />
      {filterStatus == "buy" && <FilterBuy />}
      {filterStatus == "rent-in" && <FilterRent />}
      {filterStatus == "sell" && <FilterSell />}
      {filterStatus == "rent-out" && <FilterRentOut />}
    </div>
    
    </>
  );
}

export default Filter;