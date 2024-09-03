import React, { useState, useEffect } from "react";
import EstateCreateTabs from "../components/EstateCreateTabs";
import PropertyDescriptionCreate from "../components/PropertyDescriptionCreate";
import PropertyDetailsCreate from "../components/PropertyDetailsCreate";
import PropertyLocationCreate from "../components/PropertyLocationCreate";
import PropertyMediaCreate from "../components/PropertyMediaCreate";

import useUser from "../hooks/useUser";

function CreateEstate() {
  const {propertyFormData, createProperty} = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="create-estate-wrapper">
            <form onSubmit={handleSubmit}>
            <div className="estate-card card mt-3 p-5">
              <EstateCreateTabs />
              <div className="tab-content">
              <PropertyDescriptionCreate />
              <PropertyMediaCreate />
              <PropertyLocationCreate propertyFormData={propertyFormData} createProperty={createProperty} />
              {/* <PropertyDetailsCreate /> */}
              </div>
              {/* <div className="create-estate-control-btn mt-5">
                <button className="btn btn-style-1">
                  Go Back<i class="bi bi-arrow-up-left"></i>
                </button>
                <button className="btn btn-style-1">
                  Next<i class="bi bi-arrow-up-right"></i>
                </button>
              </div> */}
            </div>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default CreateEstate;
