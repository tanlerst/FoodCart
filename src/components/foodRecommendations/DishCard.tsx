/* Item card with food details for food swipe recommendations */

import type { FoodItem } from "../../types/food";

type DishCardProps = {
    dish: FoodItem;
};

export default function DishCard({ dish }: DishCardProps) {
    return (
        <div className="bg-white rounded-[2rem] px-5 pb-6 pt-7 shadow-md">
            
            {/* Image */}
            <img
                src={dish.image}
                alt={dish.name}
                className="mx-auto h-48 w-full object-cover"
            />

            {/* Dish Name */}
            <h2 className="text-lg font-bold text-center mt-2">
                {dish.name}
            </h2>
            
            {/* Description */}
            <p className="text-gray-500 text-sm text-center mt-2">
                {dish.description}
            </p>
        
            {/* Price */}
            <p className="text-gray-800 font-bold text-center mt-2">
                ${dish.price.toFixed(2)}
            </p>
        </div>
    );
}   

