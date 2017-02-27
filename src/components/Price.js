import React, { PropTypes } from 'react'

const Price = ({ price, onPriceChanged }) => (
  <div className="row">
    <label htmlFor="price">Price</label>
    <input
      name="price"
      type="number"
      value={price}
      onChange={event => onPriceChanged(event.target.value)}
    />
  </div>
)

Price.propTypes = {
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
}

export default Price
