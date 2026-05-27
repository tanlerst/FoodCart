/* Main Menu Page of FoodCart */

import { useState } from "react";
import FoodGrid from "../components/menu/FoodGrid";
import SearchBar from "../components/menu/SearchBar";
import NavigationBar from "../components/menu/NavigationBar";
import CategoryTabs from "../components/menu/CategoryTabs";

// sample food data for testing
import { sample_menu } from "../schema";
import type { Food } from "../types/Food";

/* 

fetch food data from database here

*/

/* currently getting categories from sample_menu*/

/* function to get unique categories from food items, add "All" category at the beginning */
function getCategories(foods: Food[]): string[] {
    const categories: string[] = ["All"];
    for (const food of foods) {
        // if category not in categories, add it
        if (!categories.includes(food.category)) {
            categories.push(food.category);
        }
    }
    return categories;
}


/*filter foods by category and search word*/
function filterFoods(foods: Food[], category: string, searchWord: string): Food[] {
    // search word has priority over category, if search word is not empty, ignore category and filter by search word only
    if (searchWord) {
        return filterFoodsBySearchWord(foods, searchWord);
    }
    return filterFoodsByCategory(foods, category, searchWord);
}


/* helper function to filter foods by category, if category is "All", return all foods */
function filterFoodsByCategory(foods: Food[], category: string, searchWord: string): Food[] {
    if (category === "All") {
      return foods
    }
    return foods.filter(food => food.category === category);

}


/* helper function to filter foods by search word*/
function filterFoodsBySearchWord(foods: Food[], searchWord: string): Food[] {

    let filtered_foods = foods;
    if (searchWord) {
        filtered_foods = foods.filter(food => food.name.toLowerCase().includes(searchWord.toLowerCase()));
    }
    return filtered_foods;
}


export default function MenuPage() {

    const [searchWord, setSearchWord] = useState<string>(""); // search bar
    const [chosenCategory, setSelectedCategory] = useState<string>("All");
    const categories = getCategories(sample_menu);
    const filtered_foods = filterFoods(sample_menu, chosenCategory, searchWord);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{chosenCategory}</h1>
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
            
            <CategoryTabs categories={categories} chosen_category={chosenCategory} changeCategory={setSelectedCategory} />
            <FoodGrid foods={filtered_foods} />
            <NavigationBar />
        </div>
    );
}

