import React, { useState } from 'react';
import ReactSlider from 'react-slider';


const PriceRangeSlider = ({handleSliderChange, budgetRange}) => {

  return (
    <div className="price-range-slider">
      <label htmlFor="Budget">Budget</label>
      <div className="slider-container">
        <ReactSlider
          min={20}
          max={10000}
          value={budgetRange}
          onChange={handleSliderChange}
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
        <div className="price-range-values">
          <span>Min: K{budgetRange[0]}</span>
          <span>Max: K{budgetRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
