import React from 'react';
import classes from './Bar.module.css';

const Bar = (props) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.TotalPrice}>{props.totalPrice}</div>
            <button className={classes.Button}>  go to pay</button>
        </div>
    );
};

export default Bar;
