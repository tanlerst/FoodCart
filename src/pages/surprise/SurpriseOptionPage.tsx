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
import UserLayout from "../../layouts/UserLayout";

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
    <UserLayout title="Surprise Me">
      <div className="space-y-4">
        <MealAmountCard mealAmount={mealAmount} setMealAmount={setMealAmount} />

        <BudgetCard budget={budget} minBudget={0} maxBudget={200} setBudget={setBudget} />

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
    </UserLayout>
  );
}
