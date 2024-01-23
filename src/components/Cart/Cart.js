import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {

    const ctx = useContext(CartContext);

    // Add a state to control the visibility of the details
    const [showDetails, setShowDetails] = useState(false);
    // Add a state to control the visibility of the checkout page
    const [showCheckout, setShowCheckout] = useState(false);

    // Add a function to toggle the visibility of the details page
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        };
        setShowDetails(prevState => !prevState);
    };

    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return;
        setShowCheckout(true);
    };

    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    };

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}

            {/* Import the details page of the shopping cart */}
            {showDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg} alt="Cart Icon" />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>No items selected</p> :
                <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button
                onClick={showCheckoutHandler}
                className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>Checkout</button>
        </div>
    );
};

export default Cart;
