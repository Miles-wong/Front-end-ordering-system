import React, { useContext, useEffect } from 'react';
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";

const Checkout = (props) => {
    const ctx = useContext(CartContext);

    useEffect(() => {
        const checkoutRoot = document.getElementById('checkout-root');
        if (!checkoutRoot) {
            console.error("Element with id 'checkout-root' not found");
        }
    }, []);

    const checkoutRoot = document.getElementById('checkout-root');
    if (!checkoutRoot) {
        return null; // or handle it in another way
    }

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon
                    onClick={() => props.onHide() }
                    icon={faXmark}/>
            </div>

            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Meal Details</h2>
                </header>

                <div className={classes.Meals}>
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>

            <Bar totalPrice={ctx.totalPrice}/>
        </div>,
        checkoutRoot
    );
};

export default Checkout;
