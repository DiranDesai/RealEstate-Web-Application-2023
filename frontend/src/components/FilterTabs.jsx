import React, { useState } from "react";
import useUser from "../hooks/useUser";

function FilterTabs() {
  const {filterStatus, setFilterStatus} = useUser();

  const checkStatus = (filterType) => {
    let isClicked = filterType == filterStatus
    if (isClicked) {
      return "active"
    } else{
      return "bd";
    }
  }

  return (
    <div className="menu">
      <div className={checkStatus("buy")} onClick={() => setFilterStatus("buy")}>
        Buy<span className="material-symbols-outlined">shopping_bag</span>
      </div>
      <div className={checkStatus("rent-in")} onClick={() => setFilterStatus("rent-in")}>
        Rent In (Tenants)<span className="material-symbols-outlined">bedroom_parent</span>
      </div>
      <div className={checkStatus("sell")} onClick={() => setFilterStatus("sell")}>
        Sell<span className="material-symbols-outlined">storefront</span>
      </div>
      <div className={checkStatus("rent-out")} onClick={() => setFilterStatus("rent-out")}>
        Rent Out (Landlords)<span className="material-symbols-outlined">bedroom_parent</span>
      </div>
    </div>
  );
}

export default FilterTabs;