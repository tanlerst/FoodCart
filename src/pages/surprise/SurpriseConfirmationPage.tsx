import BackButton from "../../components/surprise/surpriseConfirmation/BackButton";
import PlaceOrderButton from "../../components/surprise/surpriseConfirmation/PlaceOrderButton";
import SurpriseBanner from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseBanner";
import ConfirmSurpriseHeader from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseHeader";
import ConfirmSurpriseSummaryCard from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseSummaryCard";
import ConfirmSurpriseTotalCard from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseTotal";
import type { SurprisePreferences } from "../../types/surprise";
import { useLocation, useNavigate } from "react-router";
import { getSurpriseFoods } from "../../helpers/surprise/surpriseHelper";
import { useEffect, useState } from "react";
import type { FoodItem, ItemData } from "../../types/food";
import { doCheckout } from "../../helpers/cart/doCheckout";

export default function SurpriseConfrmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const preferences = location.state as SurprisePreferences | undefined;
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadFoods() {
      if (!preferences) {
        return;
      }
      try {
        const data = await getSurpriseFoods(preferences);
        setFoods(data ? data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "No food matches your selected preferences.");
      } finally {
        setLoading(false);
      }
    }
    loadFoods();
  }, [preferences]);
  if (!preferences) {
    navigate("/surprise");
    return null;
  }

  async function handlePlaceOrder() {
    try {
      const grouped = new Map<number, ItemData>();

      for (const food of foods) {
        const existing = grouped.get(food.id);

        if (existing) {
          existing.quantity++;
        } else {
          grouped.set(food.id, {
            food,
            quantity: 1,
          });
        }
      }

      await doCheckout([...grouped.values()]);

      navigate("/surpriseplaced");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to place order.");
    }
  }

  function handleBack() {
    navigate("/surprise");
  }
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="min-h-screen bg-orange-50 p-4">
      <div className="relative mx-auto min-h-screen max-w-md rounded-2xl p-10 shadow-md">
        <div>
          <ConfirmSurpriseHeader onBack={handleBack} />
        </div>

        <div>
          <SurpriseBanner />
        </div>

        <div>
          <ConfirmSurpriseSummaryCard
            amount={preferences.amount}
            budget={preferences.budget}
            dietaryPreferences={preferences.dietaryPreferences}
            categories={preferences.categories}
            remark={preferences.remark}
          />
        </div>

        <div>
          <ConfirmSurpriseTotalCard amount={preferences.amount} budget={preferences.budget} />
        </div>

        <div className="mt-auto grid grid-cols-[0.9fr_1.1fr] gap-4 pt-8">
          <BackButton onClick={handleBack} />

          <PlaceOrderButton onClick={handlePlaceOrder} />
        </div>
      </div>
    </main>
  );
}
