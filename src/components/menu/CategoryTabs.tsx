/* Category tabs for menu page 
1. pizza 
2. burger
3. salad
4. drinks
*/

import React from 'react';

/* get categories from backend and map to tabs */

type CategoryTabProps = {
    categories: string[];
    chosen_category: string; /* current selected category */
    changeCategory: (category: string) => void; /* function to change category on click */
};

export default function CategoryTabs({ categories, chosen_category, changeCategory }: CategoryTabProps) {
    return (

    <div className="flex justify-around mb-6">
      {categories.map((category) => (
        <button key={category}
                onClick={() => changeCategory(category)}
                className={ chosen_category === category
                            ? "text-orange-500 font-bold"
                            : "text-gray-700"
                          }>
                {category}
        </button>
      ))}
    </div>
  );
}
