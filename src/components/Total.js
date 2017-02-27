import React, { PropTypes } from 'react'

const Total = ({ price, vat, wht }) => (
  <div className="total">
    {`Total = ${(price * ((1 + (vat / 100)) - (wht / 100))).toFixed(2)}`}
  </div>
)

Total.propTypes = {
  price: PropTypes.number.isRequired,
  vat: PropTypes.number.isRequired,
  wht: PropTypes.number.isRequired,
}

export default Total
