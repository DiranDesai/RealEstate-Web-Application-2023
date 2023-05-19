import React, { useEffect } from "react";
import EstateCreateTabs from "../components/EstateCreateTabs";
import PropertyDescriptionCreate from "../components/PropertyDescriptionCreate";
import PropertyDetailsCreate from "../components/PropertyDetailsCreate";
import PropertyLocationCreate from "../components/PropertyLocationCreate";
import PropertyMediaCreate from "../components/PropertyMediaCreate";

function CreateEstate() {

  console.log(123);

  useEffect(() => {

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="create-estate-wrapper">
            <h4 className="text-dark fw-bold">Add Estate</h4>
            <div className="estate-card card mt-3 p-5">
              <EstateCreateTabs />
              <div className="tab-content">
                <PropertyDescriptionCreate />
                <PropertyMediaCreate />
                <PropertyLocationCreate />
                <PropertyDetailsCreate />
              </div>
              <div className="create-estate-control-btn mt-5">
                <button className="btn btn-style-1">
                  Prev Step<i class="bi bi-arrow-up-left"></i>
                </button>
                <button className="btn btn-style-1">
                  Next Step<i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default CreateEstate;
