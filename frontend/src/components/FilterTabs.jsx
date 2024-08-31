import React, { useState } from "react";

function FilterTabs() {
  //const data = useAppContext();
  const [filterStatus, setFilterStatus] = useState("buy");

  const checkStatus = (filterType) => {
    return filterType == filterStatus && "active";
  }

  return (
    <div className="menu">
      <div className={checkStatus("buy")} onClick={() => setFilterStatus("buy")}>
        Buy<span class="material-symbols-outlined">shopping_bag</span>
      </div>
      <div className={checkStatus("rent-in")} onClick={() => setFilterStatus("rent-in")}>
        Rent In (Tenants)<span class="material-symbols-outlined">bedroom_parent</span>
      </div>
      <div className={checkStatus("sell")} onClick={() => setFilterStatus("sell")}>
        Sell<span class="material-symbols-outlined">storefront</span>
      </div>
      <div className={checkStatus("rent-out")} onClick={() => setFilterStatus("rent-out")}>
        Rent Out (Landlords)<span class="material-symbols-outlined">bedroom_parent</span>
      </div>
    </div>
  );
}

export default FilterTabs;