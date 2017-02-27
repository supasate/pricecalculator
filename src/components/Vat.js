import React, { PropTypes } from 'react'

const Vat = ({ vat, price }) => (
  <div className="vat">
    Vat {vat} % = {(price * (vat / 100)).toFixed(2)}
  </div>
)

Vat.propTypes = {
  vat: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default Vat
