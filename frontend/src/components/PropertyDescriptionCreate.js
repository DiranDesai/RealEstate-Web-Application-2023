import React from "react";

function PropertyDescriptionCreate() {
  return (
    <div
      className="tab-pane fade property-description show active"
      id="description"
    >
      <h5 className="fw-bold">Property Description</h5>
      <div className="form mt-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control description"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="category">Select category</label>
              <select className="select form-control">
                <option value="">Nothing Selected</option>
                <option value="">Office</option>
                <option value="">Office</option>
                <option value="">Office</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="category">Listed in</label>
              <select className="select form-control">
                <option value="">Nothing Selected</option>
                <option value="">Office</option>
                <option value="">Office</option>
                <option value="">Office</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="category">Property Status</label>
              <select className="select form-control">
                <option value="">Nothing Selected</option>
                <option value="">Office</option>
                <option value="">Office</option>
                <option value="">Office</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Price $</label>
              <input type="text" className="form-control" placeholder="$" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Yearly Tax Rate $</label>
              <input type="text" className="form-control" placeholder="$" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="price">Monthly Taxt Rate $</label>
              <input type="text" className="form-control" placeholder="$" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDescriptionCreate;
