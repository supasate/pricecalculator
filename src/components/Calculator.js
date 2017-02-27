import React, { Component, PropTypes } from 'react'
import Price from './Price'
import Vat from './Vat'
import Wht from './Wht'
import Total from './Total'

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 100,
    }

    this.onPriceChanged = this.onPriceChanged.bind(this)
  }

  onPriceChanged(price) {
    this.setState({
      ...this.state,
      price: parseInt(price, 10),
    })
  }

  onVatChanged(vat) {
    this.setState({
      ...this.state,
      vat: parseInt(vat, 10),
    })
  }

  onWhtChanged(wht) {
    this.setState({
      ...this.state,
      wht: parseInt(wht, 10),
    })
  }

  render() {
    const { vat, wht } = this.props
    const price = this.state.price

    return (
      <div>
        <Price price={price} onPriceChanged={this.onPriceChanged} />
        <Vat vat={vat} price={price} />
        <Wht wht={wht} price={price} />
        <Total price={price} vat={vat} wht={wht} />
      </div>
    )
  }
}

Calculator.propTypes = {
  vat: PropTypes.number.isRequired,
  wht: PropTypes.number.isRequired,
}

export default Calculator
