import React, { PropTypes } from 'react'

const Wht = ({ wht, price }) => (
  <div className="wht">
    {`Wht ${wht}% = ${(price * (wht / 100)).toFixed(2)}`}
  </div>
)

Wht.propTypes = {
  wht: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default Wht
