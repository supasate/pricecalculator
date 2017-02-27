import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './components/Calculator'

ReactDOM.render(
  <Calculator vat={7} wht={3} />,
  document.getElementById('react-root'),
)
