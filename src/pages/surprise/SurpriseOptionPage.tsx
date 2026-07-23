import { useState } from "react";
import BudgetCard from "../../components/surprise/surpriseOption/BudgetCard";
import DietaryPreferences from "../../components/surprise/surpriseOption/DietaryPreferences";
import MealAmountCard from "../../components/surprise/surpriseOption/MealAmountCard";
import NotesCard from "../../components/surprise/surpriseOption/NotesCard";
import SurpriseMeButton from "../../components/surprise/surpriseOption/SurpriseMeButton";
import CategoryCard from "../../components/surprise/surpriseOption/CategoryCard";
import NavigationBar from "../../components/common/NavigationBar";
import { useNavigate } from "react-router";
import type { SurprisePreferences } from "../../types/surprise";

export default function SurpriseOptionPage() {
  const navigate = useNavigate();

  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [budget, setBudget] = useState(15);
  const [category, setCategory] = useState<string[]>([]);
  const [mealAmount, setMealAmount] = useState(1);

  const handleSurprise = () => {
    const preferences: SurprisePreferences = {
      amount: mealAmount,
      budget,
      dietaryPreferences,
      categories: category,
      remark: notes,
    };
    navigate("/surpriseconfirmation", {
      state: preferences,
    });
  };

  return (
    <main className="min-h-screen bg-orange-50 p-4 pb-28">
      <div className="relative mx-auto max-w-md rounded-2xl p-10 shadow-md">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">Surprise Me!</h1>

        <div className="my-6 w-full max-w-md">
          <MealAmountCard mealAmount={mealAmount} setMealAmount={setMealAmount} />

          <BudgetCard budget={budget} minBudget={15} maxBudget={200} setBudget={setBudget} />

          <DietaryPreferences
            dietaryPreference={dietaryPreferences}
            setDietaryPreference={setDietaryPreferences}
          />

          <CategoryCard selectedCategories={category} setSelectedCategory={setCategory} />

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
