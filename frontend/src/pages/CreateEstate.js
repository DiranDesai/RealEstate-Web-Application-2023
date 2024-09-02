import React, { useState, useEffect } from "react";
import EstateCreateTabs from "../components/EstateCreateTabs";
import PropertyDescriptionCreate from "../components/PropertyDescriptionCreate";
import PropertyDetailsCreate from "../components/PropertyDetailsCreate";
import PropertyLocationCreate from "../components/PropertyLocationCreate";
import PropertyMediaCreate from "../components/PropertyMediaCreate";

import useUser from "../hooks/useUser";

function CreateEstate() {

  const {propertyFormData, createProperty} = useUser();
  const createForms = [<PropertyDescriptionCreate />, <PropertyMediaCreate />, <PropertyLocationCreate />, <PropertyDetailsCreate />]
  let formIndex = 0

  const handleSubmit = (e) => {
    e.preventDefault();

    createProperty(propertyFormData);
  }

  function handleFormNext(){
    if(formIndex > 3) return
    formIndex += 1
  }

  function handleFormPrev(){
    if(formIndex <= 0) return 
    formIndex += -1
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
              {(formIndex == 0) && <PropertyDescriptionCreate />}
              {(formIndex == 1) && <PropertyMediaCreate />}
              {(formIndex == 2) && <PropertyLocationCreate />}
              {(formIndex == 3) && <PropertyDetailsCreate />}
              </div>
              <div className="create-estate-control-btn mt-5">
                <button className="btn btn-style-1" onClick={handleFormPrev}>
                  Go Back<i class="bi bi-arrow-up-left"></i>
                </button>
                <button className="btn btn-style-1" onClick={handleFormNext}>
                  Next<i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
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
