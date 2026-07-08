/* Food Recommendation page */

// import { useState } from "react";
import type { FoodItem } from "../types/food";
import FoodRecommendation from "../components/foodRecommendations/FoodRecommendationCard";
import temp from "../assets/Logo.png";

export default function FoodRecommendationPage() {


    // current using hardcoding items
    const hardcodedDishes: FoodItem[] = [
        {
            id: 1,
            name: "Spaghetti Bolognese",
            description: "Classic Italian pasta dish with rich meat sauce.",
            price: 12.99,
            image: temp,
            time: 20,
            isRecommended: true,
            isAvailable: true,
            category: { name: "Pasta" },
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Traditional pizza with fresh tomatoes, mozzarella, and basil.",
            price: 10.99,
            image: temp,
            time: 15,
            isRecommended: true,
            isAvailable: true,
            category: { name: "Pizza" },
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp lettuce with Caesar dressing, croutons and Parmesan cheese.",
            price: 8.99,
            image: temp,
            time: 10,
            isRecommended: true,
            isAvailable: true,
            category: { name: "Salad" },
        },
    ];

    function handleAddDish(dish: FoodItem) {
        // logic to add the dish to the order
        console.log(`Added ${dish.name} to the order.`);
    }

    return <FoodRecommendation recommendedDishes={hardcodedDishes} onAddDish={handleAddDish} />;

}
    
