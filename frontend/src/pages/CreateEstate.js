import React, { useState, useEffect, useRef } from "react";
import EstateCreateTabs from "../components/EstateCreateTabs";
import PropertyDescriptionCreate from "../components/PropertyDescriptionCreate";
import PropertyDetailsCreate from "../components/PropertyDetailsCreate";
import PropertyLocationCreate from "../components/PropertyLocationCreate";
import PropertyMediaCreate from "../components/PropertyMediaCreate";

import useUser from "../hooks/useUser";
import { SHOW_NOTIFY } from "../context/types";
import useNotify from "../hooks/useNotify";
import MessageComponent from "../components/MessageComponent";

function CreateEstate() {
  const { propertyFormData, createProperty } = useUser();
  let [submitClicked, setSubmitClicked] = useState(false);
  const { dispatch, error, payloadData } = useNotify();

  async function handleSubmit(e) {
    e.preventDefault();

    if (submitClicked) {
      if (
        !propertyFormData.location ||
        !propertyFormData.title ||
        !propertyFormData.description ||
        !propertyFormData.category ||
        !propertyFormData.status || 
        !propertyFormData.price || 
        !propertyFormData.address ||
        !propertyFormData.country ||
        propertyFormData.images.length <= 0
      ) {
        console.log(propertyFormData)
        dispatch({
          type: SHOW_NOTIFY,
          payload: { success: false, message: "Please fill all the fields" },
        });
        setSubmitClicked(false);
        return;
      } else{
        console.log(123)

      }

      
      await createProperty(propertyFormData)
      setSubmitClicked(false);



     
      
    }
  }

  return (
    <>
      {error && <MessageComponent payloadData={payloadData} />}
      {!error && payloadData?.success == true && <MessageComponent payloadData={payloadData} />}
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
                    <PropertyLocationCreate
                      setSubmitClicked={setSubmitClicked}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default CreateEstate;
