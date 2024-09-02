import React, { useState } from "react";

import useUser from "../hooks/useUser";
import { handleFormChange } from "../context/utils";

function PropertyDescriptionCreate() {
  const {propertyFormData, dispatch} = useUser();

  return (
    <div
      className="tab-pane fade property-description show active"
      id="description"
    >
      <h5 className="fw-bold">Property Description</h5>
      <div className="form mt-3">
        <div className="form-group">
          <label htmlFor="name">Propery Name</label>
          <input type="text" placeholder="Property Name" name="title" value={propertyFormData.title || ""} onChange={e => handleFormChange(e.target, dispatch)} />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="description">Property Description</label>
          <textarea
            className="description"
            placeholder="Description" name="description" value={propertyFormData.description || ""} onChange={e => handleFormChange(e.target, dispatch)}
          ></textarea>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="category">Select category</label>
              <select className="select" name="category" onChange={e => handleFormChange(e.target, dispatch)}>
                <option value="">Choose category</option>
                <option value="office">Office</option>
                <option value="houses">Houses</option>
                <option value="apartments">Appartments</option>
                <option value="lodges">Lodges</option>

              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="category">Property Status</label>
              <select className="select" name="status" onChange={e => handleFormChange(e.target, dispatch)}>
                <option value="">Choose status</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
                <option value="book">Book</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Price $</label>
              <input type="number" placeholder="$" name="price" value={propertyFormData.price || ""} onChange={e => handleFormChange(e.target, dispatch)} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Yearly Tax Rate $</label>
              <input type="number" placeholder="$" name="yearlyTax" value={propertyFormData.yearlyTax || ""} onChange={e => handleFormChange(e.target, dispatch)} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Monthly Taxt Rate $</label>
              <input type="number" placeholder="$" name="monthlyTax" value={propertyFormData.monthlyTax || ""} onChange={e => handleFormChange(e.target, dispatch)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDescriptionCreate;
