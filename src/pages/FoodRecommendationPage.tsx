/* Food Recommendation page */

import BrowseMenuButton from "../components/foodRecommendations/BrowseMenuButton";
import DishCard from "../components/foodRecommendations/DishCard";
import temp from "../assets/Logo.png";
import SkipCard from "../components/foodRecommendations/SkipCard";
import AddCard from "../components/foodRecommendations/AddCard";
import SkipIcon from "../components/foodRecommendations/SkipIcon";
import AddIcon from "../components/foodRecommendations/AddIcon";
import AddDishButton from "../components/foodRecommendations/AddDishButton";
import CloseButton from "../components/foodRecommendations/CloseButton";


// type FoodRecommendationPageProps = {
//     recommendedDishes: FoodItem[];
// };

// export default function FoodRecommendationPage({ recommendedDishes }: FoodRecommendationPageProps) {
    
export default function FoodRecommendationPage() {
    
    const handleBrowseMenu = () => {
    // navigate to the menu page
    };

    const handleAddDish = () => {
    // logic to add the dish to the order
    }

    return (
        <main className="min-h-screen bg-orange-50 p-4">
            <div className="relative mx-auto min-h-screen max-w-md rounded-2xl bg-white-100 p-10 shadow-md">
                {/* Close button */}
                <CloseButton onClose={() => console.log("Close button clicked!")} />

                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <h1 className="text-lg font-semibold mb-2">
                        Recommended for you
                    </h1>

                    <h1 className="text-3xl font-bold mb-2">
                        Swipe to choose
                    </h1>

                    <p className="mx-auto mt-2 text-sm text-center text-gray-600">
                    Swipe right to add to your order or swipe left to skip. 
                    Browse the menu for more options.
                    </p>     
                </div>

                {/* Dish Card */}

                <div className="mx-auto mt-6 flex w-[80%] items-center justify-between"> 
                    <SkipCard onSkip={() => console.log("Skipped!")} />
                    <AddCard onAdd={() => console.log("Added!")} />
                </div>
                <div className="relative mx-auto mt-4 w-[80%] ">
                    
                    {/* Hardcoded Food Item */}
                    <DishCard 
                        dish={{
                            id: 1,
                            name: "Spaghetti Bolognese",
                            description: "pasta xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx",
                            price: 12.99,
                            image: temp,
                            category: { name: "Pasta" },
                            isRecommended: true,
                            isAvailable: true,
                            time: 1
                        }}
                    />

                    {/* Skip Icon (left) */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                        <SkipIcon onSkip={() => console.log("Skipped!")} /> 
                    </div>

                    {/* Add Icon (right) */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                        <AddIcon onAdd={() => console.log("Added!")} /> 
                    </div>
                </div>

                {/* Browse Menu and Add Dish Buttons */}

                <div className="flex justify-center gap-4 mt-10">
                    <BrowseMenuButton 
                        onBrowseMenu={handleBrowseMenu} 
                    />

                    <AddDishButton onAddDish={handleAddDish} />
                </div>

            </div>
        </main>
    );
}

