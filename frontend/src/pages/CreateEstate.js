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

  const GOOGLE_API_KEY = "AIzaSyDfy4ChgcVlAXpC7NNnabrQ_Yx812f2sZY"

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
      } else {
        async function getLocationCoords(){
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(propertyFormData.address)}&key=${GOOGLE_API_KEY}`);
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            dispatch({type: "updateFormLocation", payload: {lat, lng}})
            await createProperty(propertyFormData, {lat, lng})
            setSubmitClicked(false)
          }
        }

        await getLocationCoords();
          
        }
  
    
        
      }


  

      //setSubmitClicked(false);


  
     
      
    }


  

  return (
    <>
      {error && <MessageComponent payloadData={payloadData} />}
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
