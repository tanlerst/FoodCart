import BackButton from "../../components/surprise/surpriseConfirmation/BackButton"
import PlaceOrderButton from "../../components/surprise/surpriseConfirmation/PlaceOrderButton";
import SurpriseBanner from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseBanner"
import ConfirmSurpriseHeader from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseHeader"
import ConfirmSurpriseSummaryCard from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseSummaryCard";
import ConfirmSurpriseTotalCard from "../../components/surprise/surpriseConfirmation/ConfirmSurpriseTotal"
import type { SurprisePreferences } from "../../types/surprise";

export default function SurpriseConfrmationPage() {
  function handlePlaceOrder() {
    // logic here
  }

  function handleBack() {
    // back navigation 
  }

  // get preferences from prev page 
  // const preferences:SurprisePreferences = ;
  const preferences = null;

  return (

    <main className="min-h-screen bg-orange-50 p-4">
      <div className="relative mx-auto min-h-screen max-w-md rounded-2xl p-10 shadow-md">
        <div>
          <ConfirmSurpriseHeader
            onBack={handleBack} />
        </div>

        <div>
          <SurpriseBanner />
        </div>

        <div>
          {/* <ConfirmSurpriseSummaryCard
            budget={preferences.budget}
            dietaryPreferences={preferences.dietaryPreferences}
            categories={preferences.categories}
            remark={preferences.remark}
          /> */}

          {/* hard coded value */}
          <ConfirmSurpriseSummaryCard
            budget={25}
            dietaryPreferences={[]}
            categories={[]}
            remark="no remark"
          />
        </div>

        <div>
          {/* <ConfirmSurpriseTotalCard
            budget={preferences.budget} /> */}

          {/* hard coded value */}
          <ConfirmSurpriseTotalCard
            budget={25} />
        </div>

        {/* Buttons */}
        <div className="mt-auto grid grid-cols-[0.9fr_1.1fr] gap-4 pt-8">
          <BackButton onClick={handleBack} />

          <PlaceOrderButton onClick={handlePlaceOrder} />
        </div>
      </div>
    </main>
  );
}