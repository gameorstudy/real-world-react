import React, { Component } from 'react';

import ProductReivew from '../components/product-review'

class ProductTabs extends Component {
    state = { 
        tabs: ['Reviews', 'Make a Review'],
        selectedTab: 'Reviews'
     }
    render() { 
        return ( 
            <div className="tab">
                {this.state.tabs.map(tab => <span className={this.getActiveTabClass(tab)} onClick={() => this.setTab(tab)} key={tab}>{tab}</span>)}
                <div style={{ display: this.showReviewContents()}}>
                    {this.displayReviews()}
                </div>
                <div style={{ display: this.showReviews() }}>
                    {this.errorMessage()}
                    <ProductReivew onReviewSubmitted={this.props.onSubmit} />
                </div>
            </div>
         );
    }

    setTab = tabContent => {
        this.setState({ selectedTab: tabContent})
    }

    getActiveTabClass(tabContent) {
        return this.state.selectedTab === tabContent ?'activeTab' : ''
    }

    showReviewContents() {
        return this.state.selectedTab === 'Make a Review' ? 'none' : ''
    }

    showReviews() {
        return this.state.selectedTab === 'Reviews' ? 'none' : ''
    }

    displayReviews = () => {
        if (this.props.reviews.length === 0) return <p>There are no reviews yet.</p>
        return this.props.reviews.map(review => <ul key={review.name}>
        <li>{review.name}</li>
        <li>Rating: {review.rating}</li>
        <li>{review.review}</li>
        </ul>)
    }

    errorMessage = () => {
        if (this.props.errors.length > 0) return (
            <>
                <b>Please correct the following error(s):</b>
                {this.props.errors.map(error => <p key={error}>{error}</p>)}
            </>
        )
    }
}
 
export default ProductTabs;