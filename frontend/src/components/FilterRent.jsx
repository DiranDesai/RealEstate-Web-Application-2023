import React from 'react'

function FilterRent() {
  return (
    <form>
      <div className="form-group mt-3">
        <label>Looking For Something to Rent?</label>
        <select name="propertyType">
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
    </form>
  )
}

export default FilterRent