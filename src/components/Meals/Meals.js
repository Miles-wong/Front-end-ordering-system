import React from 'react';
import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

/*
*   Meals List Component
* */
const Meals = (props) => {
    return (

        /* The scroll bar is now applied to Meals */
        <div className={classes.Meals}>
            {props.mealsData.map(item =>
                <Meal
                    key={item.id}
                    meal={item}
                />
            )}
        </div>
    );
};

export default Meals;
