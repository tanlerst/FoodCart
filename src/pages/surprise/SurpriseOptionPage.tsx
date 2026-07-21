import { useState } from "react";
import BudgetCard from "../../components/surprise/surpriseOption/BudgetCard";
import DietaryPreferences from "../../components/surprise/surpriseOption/DietaryPreferences";
import MealAmountCard from "../../components/surprise/surpriseOption/MealAmountCard";
import NotesCard from "../../components/surprise/surpriseOption/NotesCard";
import SurpriseMeButton from "../../components/surprise/surpriseOption/SurpriseMeButton";
import CategoryCard from "../../components/surprise/surpriseOption/CategoryCard";
import NavigationBar from "../../components/common/NavigationBar";
import { useNavigate } from "react-router";

export default function SurpriseOptionPage() {
  const navigate = useNavigate();
  const handleSurprise = () => {
    navigate("/surpriseconfirmation");
  };

    // const [dietaryPreferences, setDietaryPreferences] = useState("None");
    const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
    const [notes, setNotes] = useState("");
    const [budget, setBudget] = useState(10);
    // const [category, setCategory] = useState("All categories");
    const [category, setCategory] = useState<string[]>([]);
    const [mealAmount, setMealAmount] = useState(5);

  return (
    <main className="min-h-screen bg-orange-50 p-4">
      <div className="relative mx-auto min-h-screen max-w-md rounded-2xl p-10 shadow-md">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">Surprise Me!</h1>

        <div className="my-6 w-full max-w-md">
          <MealAmountCard mealAmount={mealAmount} setMealAmount={setMealAmount} />

          <BudgetCard budget={budget} setBudget={setBudget} />

                    <DietaryPreferences 
                        dietaryPreference={dietaryPreferences}
                        setDietaryPreference={setDietaryPreferences}
                    />

                    <CategoryCard
                        selectedCategories={category}
                        setSelectedCategory={setCategory}
                    />

          <NotesCard notes={notes} setNotes={setNotes} />

          <div className="mt-4 flex justify-center">
            <SurpriseMeButton onSurprise={handleSurprise} />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-orange-50">
          <NavigationBar />
        </div>
      </div>
    </main>
  );
}
