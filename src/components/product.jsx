import React, { Component } from 'react';

import vmSocks_green from '../assets/vmSocks-green.jpg'
import vmSocks_blue from '../assets/vmSocks-blue.jpg'

class Product extends Component {
    state = { product: "Socks",
    selectedIndex: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"
    ],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: vmSocks_green,
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: vmSocks_blue,
        variantQuantity: 0
      }
    ] }
    render() { 
        return ( <>
        <div className="product">
          <div className="product-image">
            <img src={this.image()} alt={this.state.variants[this.state.selectedIndex].variantColor + ' socks'} />
          </div>

          <div className="product-info">
            <h1>{this.state.product}</h1>
            {this.inStock()}
            {this.shipping()}
            <ul>
              {this.state.details.map(detail => <li key={detail}>{detail}</li>)}
            </ul>
            {this.state.variants.map((variant, index) => <span key={variant.variantId}
              className = "color-box"
              style = {
                {
                  backgroundColor: variant.variantColor
                }
              }
              onMouseOver = {
                () => this.updateProduct(index)
              }>
            </span>)}
            <br />
            <button onClick={() => this.props.onAddToCart(this.state.variants[this.state.selectedIndex].variantId)} className={this.isDisabled()} disabled={this.isDisabled()}>Add to Cart</button>
            
          </div>
        </div>
      </> );
    }

    inStock = () => {
        const { variantQuantity } = this.state.variants[this.state.selectedIndex]
        if (variantQuantity > 10) return <p>In Stock</p>
        else if (variantQuantity > 0 && variantQuantity <= 10) return <p>Almost sold out</p>
        return <p>Out of Stock</p>
    }

    updateProduct = index => {
        this.setState({ selectedIndex: index })
    }

    image() {
        return this.state.variants[this.state.selectedIndex].variantImage
    }

    isDisabled() {
        return this.state.variants[this.state.selectedIndex].variantQuantity === 0 ? 'disabledButton' : ''
    }

    shipping = () => {
        if (this.props.premium) return <p>shipping: Free</p>
        else return <p>shipping: 2.99</p>
    }
}
 
export default Product;