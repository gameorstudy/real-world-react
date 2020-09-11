import React, { Component } from 'react';
import Product from './components/product'
import ProductTabs from './components/product-tabs'
import './App.css';


class App extends Component {
  state = { 
    premium: true,
    cart: [],
    reviews: [],
    errors: []
  }
  
  
  render() { 
    return ( 
      <>
        <div className="nav-bar"></div>
        <div className="cart">
          <p>Cart({ this.state.cart.length })</p>
        </div>
        <Product premium={this.state.premium} onAddToCart={this.addToCart} />
        <ProductTabs reviews={this.state.reviews} errors={this.state.errors} onSubmit={this.reviewSubmitted} />
      </>
     );
  }

  reviewSubmitted = (e, info) => {
    e.preventDefault()

    if (info.type === "success") {
      this.state.reviews.push({
        ...info.productReview
      })
      this.setState({
        reviews: this.state.reviews
      })
      this.setState({
        errors: []
      })
    } else if (info.type === "error")
      this.setState({
        errors: [...info.errors]
      })
  }

  addToCart = id => {
    this.setState({cart: [...this.state.cart, id]})
  }
}

export default App