import React from 'react';

import './checkout.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from '../../components/custom-button/custom-button.component';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";

const CheckoutPage = ({cartItems,total,history}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>
            <div className='header-block'>
                <span>description</span>
            </div>
            <div className='header-block'>
                <span>quantity</span>
            </div>
            <div className='header-block'>
                <span>price</span>
            </div>
            <div className='header-block'>
                <span>remove</span>
            </div>
        </div>
        
        {
            cartItems.length
            ?cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
            :(
                <div className='empty'>
                    <span className="empty-checkout">No Items To Show!!!</span>
                    <CustomButton onClick={() => history.push('/')}>Add Item</CustomButton>
                </div>
            )
        }

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following credit card for test payment*
            <br/>
            4242 4242 4242 4242 exp:01/21 cvv:123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CheckoutPage));