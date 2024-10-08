import React, { useState } from "react";
import useUser from "../hooks/useUser";
import LocationInputComponent from "./LocationInputComponent";
import PriceRangeSlider from "./PriceRangeSlider";
import useNotify from "../hooks/useNotify";
import { SHOW_NOTIFY } from "../context/types";

function FilterBuy() {
  const [formData, setFormData] = useState({ propertyType: "house" });
  const [locationQuery, setLocationQuery] = useState("");
  const { searchProperties } = useUser();
  const { dispatch, error, payloadData } = useNotify();

  // budget range
  const [budgetRange, setBudgetRange] = useState([10, 100]);

  // Handle changes to the slider
  const handleSliderChange = (values) => {
    setBudgetRange(values);
    setFormData((prev) => {
      return { ...prev, budget: budgetRange };
    });
  };

  function handleFormChange(e, locationField = false) {
    let targetName,
      targetValue = null;

    if (locationField) {
      targetName = e.name;
      targetValue = e.value;
    } else {
      targetName = e.target.name;
      targetValue = e.target.value;
    }

    setFormData((prev) => {
      return { ...prev, [targetName]: targetValue };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { location } = formData;

    if (!location) {
      dispatch({
        type: SHOW_NOTIFY,
        payload: { success: false, message: "Please Specify Location" },
      });
      return;
    }

    await searchProperties(formData);
    setFormData({});

    // Search form data submitted
    setFormData({ propertyType: "" });
    setLocationQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="filter-buy">
      <div className="form-group mt-3">
        <label>Looking For Something to Buy?</label>
        <select onChange={handleFormChange} name="propertyType">
          <option value="house">
            <span>House</span>
          </option>
          <option value="apartment">Flat</option>
          <option value="condo">Room</option>
          <option value="land">Vacant Land</option>
          <option value="land">Shop</option>
          <option value="land">Office</option>{" "}
          <option value="land">Warehouse</option>{" "}
        </select>
      </div>
      <LocationInputComponent
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
        handleFormChange={handleFormChange}
      />
      <div className="form-group mt-3">
        <label>Amenities</label>
        <input
          type="text"
          name="amenities"
          placeholder="Swimming Pool, Garage"
          onChange={handleFormChange}
        />
      </div>
      {formData.propertyType == "house" && (
        <div className="form-group mt-3">
          <label>Bedrooms</label>
          <select name="bedrooms" onChange={handleFormChange}>
            <option value="1">
              <span>1</span>
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>{" "}
          </select>
        </div>
      )}
      <PriceRangeSlider
        handleSliderChange={handleSliderChange}
        budgetRange={budgetRange}
      />
      <div className="form-group mt-3 submit-wrapper">
        <button className="btn submit-btn">Search</button>
        <span class="material-symbols-outlined">search</span>
      </div>
    </form>
  );
}

export default FilterBuy;
