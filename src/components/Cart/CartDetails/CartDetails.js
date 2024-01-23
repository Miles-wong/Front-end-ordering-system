import React, { useContext, useState } from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {

    const ctx = useContext(CartContext);

    // Set state to control the visibility of the confirmation dialog
    const [showConfirm, setShowConfirm] = useState(false);

    // Function to show the confirmation dialog
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    // Function to handle cancellation of the confirmation dialog
    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    // Function to handle confirmation and clear the cart
    const okHandler = () => {
        // Clear the cart
        ctx.clearCart();
    };

    return (
        <Backdrop>

            {showConfirm && <Confirm
                onCancel={cancelHandler}
                onOk={okHandler}
                confirmText={'Are you sure you want to clear the cart?'} />}

            <div
                className={classes.CartDetails}
                onClick={e => e.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Meal Details</h2>
                    <div
                        onClick={showConfirmHandler}
                        className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>Clear Cart</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        ctx.items.map(item =>
                            <Meal noDesc key={item.id} meal={item} />
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;
