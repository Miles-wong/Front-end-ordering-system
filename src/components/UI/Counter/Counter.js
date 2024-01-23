import React, { useContext } from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

/*
*    Install FontAwesome
*       - Install dependencies
*           npm i --save @fortawesome/fontawesome-svg-core
            npm i --save @fortawesome/free-solid-svg-icons
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/react-fontawesome@latest

            yarn add @fortawesome/react-fontawesome@latest @fortawesome/free-regular-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons

        - Import the component
               import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
        - Import icons
                import {faPlus} from "@fortawesome/free-solid-svg-icons";
        - Use the component
                <FontAwesomeIcon icon={faPlus}/>
*
* */

// Counter component
const Counter = (props) => {

    // Get cartContext
    const ctx = useContext(CartContext);

    // Function for adding items
    const addButtonHandler = () => {
        ctx.addItem(props.meal);
    };

    // Function for subtracting items
    const subButtonHandler = () => {
        ctx.removeItem(props.meal);
    };

    return (
        <div className={classes.Counter}>

            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button
                            onClick={subButtonHandler}
                            className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button
                onClick={addButtonHandler}
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
};

export default Counter;
