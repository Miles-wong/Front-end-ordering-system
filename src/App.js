import React, { useState } from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

// Simulating a set of meal data
const MEALS_DATA = [
   {
    id: '1',
    title: 'Hamburger',
    desc: 'Made with 100% pure beef, paired with crisp pickles, onions, and delicious tomato sauce, the classic taste is irresistible!',
    price: 12,
    img: '/img/meals/1.png'
    },
    {
    id: '2',
    title: 'Double Cheeseburger',
    desc: 'Made with 100% pure beef and double layers of soft and creamy cheese, topped with soft bread and delicious sauce, its irresistibly tempting!',

    price: 20,
    img: '/img/meals/2.png'
    },
    {
    id: '3',
    title: 'Big Mac',
    desc: 'Two pieces of 100% pure beef, paired with lettuce, onions, and other fresh ingredients, rich in taste and extremely delicious!',
    price: 24,
    img: '/img/meals/3.png'
    }, {
    id: '4',
    title: 'McSpicy Chicken Burger',
    desc: 'Golden crispy and spicy outer skin, tender and smooth chicken thigh meat, multiple flavors, once impressing your picky taste buds!',
    price: 21,
    img: '/img/meals/4.png'
    }, {
    id: '5',
    title: 'Grilled Chicken Burger',
    desc: 'Original boneless chicken fillet, tender and juicy, paired with fresh green lettuce and rich grilled chicken sauce, rich in taste!',
    price: 22,
    img: '/image/meals/1.png'
    }, {
    id: '6',
    title: 'McChicken',
    desc: 'Crisp and refreshing lettuce, golden crispy chicken, a nutritious combination, a healthy choice with great taste!',
    price: 14,
    img: '/img/meals/1.png'
    }, {
    id: '7',
    title: 'Cheeseburger',
    desc: 'Made with 100% pure beef and creamy cheese, combined with delicious tomato sauce, rich in taste, a bite bursts with flavor!',
    price: 12,
    img: '/img/meals/1.png'
    }
];

const App = () => {

    // Create a state to store the list of meals
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    // Create a state to store the cart data
    /*
    *   1. Items [] items
    *   2. Total number of items (totalAmount)
    *   3. Total price of items (totalPrice)
    * */
    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    });

    // Create a function to filter meals
    const filterHandler = (keyword) => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
        setMealsData(newMealsData);
    };

    // Add an item to the cart
    const addItem = (meal) => {
        // meal is the item to be added to the cart
        // Copy the cart
        const newCart = { ...cartData };

        // Check if the item is already in the cart
        if (newCart.items.indexOf(meal) === -1) {
            // Add the meal to the cart
            newCart.items.push(meal);
            // Set the quantity of the item
            meal.amount = 1;
        } else {
            // Increase the quantity of the item
            meal.amount += 1;
        }

        // Increase the total number
        newCart.totalAmount += 1;
        // Increase the total amount
        newCart.totalPrice += meal.price;

        // Update the cart
        setCartData(newCart);
    };

    // Reduce the quantity of an item
    const removeItem = (meal) => {
        // Copy the cart
        const newCart = { ...cartData };

        // Reduce the quantity of the item
        meal.amount -= 1;

        // Check if the quantity of the item is now 0
        if (meal.amount === 0) {
            // Remove the item from the cart
            newCart.items.splice(newCart.items.indexOf(meal), 1);
        }

        // Update the total number and total amount
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;

        // Update the cart
        setCartData(newCart);
    };

    // Clear the entire cart
    const clearCart = () => {
        const newCart = { ...cartData };
        // Set the quantity of items in the cart to 0
        newCart.items.forEach(item => delete item.amount);
        newCart.items = [];
        newCart.totalAmount = 0;
        newCart.totalPrice = 0;

        // Update the cart
        setCartData(newCart);
    };

    return (
        <CartContext.Provider value={{ ...cartData, addItem, removeItem, clearCart }}>
            <div>
                <FilterMeals onFilter={filterHandler} />
                <Meals
                    mealsData={mealsData}
                />
                <Cart />
            </div>
        </CartContext.Provider>
    );
};

export default App;
