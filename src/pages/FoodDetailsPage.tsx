/* Food Details Page */

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FoodDetails from '../components/food/FoodDetails';
import type { Food } from '../types/Food';

export default function FoodDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [food, setFood] = useState<Food | null>(null);
    const [quantity, setQuantity] = useState(1);
    
    // useEffect(() => {
        // using a hardcoded food item rn 
        // fetch the food details from an API using the id from the URL
        // async function fetchFoodDetails() {
//          }
    // }

    const food: Food = {
        id: 1,
        name: "Sample Food",
        description: "sample food item.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: 15,
        category: { name: "Sample Category" }
    };

    function addToCart() {
        // add to card logic
        alert(`Added ${quantity} of ${food?.name} to cart!`);
    }

    function addToWheel() {
        // add to wheel logic
        alert(`Added ${food?.name} to wheel!`);
    }

    if (!food) {
        return <div>Food not found</div>;
    }

    return (
        <FoodDetails 
            food={food}
            quantity={quantity}
            setQuantity={setQuantity}
            addToCart={addToCart}
            addToWheel={addToWheel}
        />
    );
}   