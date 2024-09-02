import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import useUser from "../hooks/useUser";
import LocationInputComponent from "./LocationInputComponent";
import PriceRangeSlider from "./PriceRangeSlider";

function Filter() {
  const [formData, setFormData] = useState({});
  const {searchProperties} = useUser()

  // budget range
  const [budgetRange, setBudgetRange] = useState([10, 100]);

  // Handle changes to the slider
  const handleSliderChange = (values) => {
    setBudgetRange(values);
    setFormData(prev => {
      return {...prev, budget: budgetRange}
    });
  };


  function handleFormChange(e){
    const targetName = e.target.name;
    const targetValue = e.target.value;

    setFormData(prev => {
      return {...prev, [targetName]: targetValue}
    })
  }

  async function handleSubmit(e){
    e.preventDefault();

    await searchProperties(formData)
    setFormData({})
  }




  return (
    <div className="filter filter-wrapper">
      <FilterTabs />
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Looking For</label>
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
        <LocationInputComponent />
        <div className="form-group mt-3">
          <label>Amenities</label>
          <input type="text" name="amenities" placeholder="Swimming Pool, Garage" onChange={handleFormChange} />
        </div>
        <div className="form-group">
          <label>Bedrooms</label>
          <select name="bedrooms" onChange={handleFormChange}>
            <option value="1" selected>
              <span>1</span>
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>{" "}
          </select>
        </div>
        <PriceRangeSlider handleSliderChange={handleSliderChange} budgetRange={budgetRange} />
        <div className="form-group mt-3 submit-wrapper">
          <button className="btn submit-btn" >Search</button>
          <span class="material-symbols-outlined">search</span>
        </div>
      </form>
    </div>
  );
}

export default Filter;