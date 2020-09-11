import React, { Component } from 'react';

class ProductReview extends Component {
    state = { 
        name: "",
        review: "",
        rating: "",
     }
    render() { 
        return (
          <form
            className="review-form"
            onSubmit={(e) =>
              this.props.onReviewSubmitted(e, this.getReviewInfo())
            }
          >
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e, "name")}
              />
            </p>
            <p>
              <label htmlFor="review">Review:</label>
              <textarea
                id="review"
                cols="30"
                rows="10"
                value={this.state.review}
                onChange={(e) => this.handleChange(e, "review")}
              ></textarea>
            </p>
            <p>
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={this.state.rating}
                onChange={(e) => this.handleChange(e, "rating")}
              >
                <option hidden></option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </p>
            <input type="submit" value="Submit" />
          </form>
        );
    }

    handleChange = (e, name) => {
        if (name === "name")
            this.setState({ name: e.target.value })
        else if (name === "review")
            this.setState({ review: e.target.value })
        else if (name === "rating")
            this.setState({ rating: e.target.value})
    }

    getReviewInfo() {
        if (this.state.name && this.state.review && this.state.rating) {
            let productReview = {}
            productReview = {
                name: this.state.name.trim(),
                review: this.state.review.trim(),
                rating: parseInt(this.state.rating)
            }
            
            this.setState({
                name: '',
                review: '',
                rating: '',
            })

            return {productReview, type: "success"}
        } else {
            let errors = []
            if (!this.state.name) 
                errors.push("Name required")
            if (!this.state.review) 
                errors.push("Review required")
            if (!this.state.rating)
                errors.push("Rating required")
            
            return {errors, type: 'error'}
        }
    }
}
 
export default ProductReview;