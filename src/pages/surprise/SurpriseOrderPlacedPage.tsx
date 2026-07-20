import OrderPlacedActionButtons from "../../components/surprise/surpriseOrderPlaced/OrderPlacedActionButtons";
import OrderOrderPlacedBanner from "../../components/surprise/surpriseOrderPlaced/OrderPlacedBanner";

export default function SurpriseOrderPlacedPage() {

  function handleOrderAgain() {
    // navigate to surprise order page
  }

  function handleBackMenu() {
    // back to menu
  }

  return (
    <main className="min-h-screen bg-orange-50 p-4">
      <div className="relative mx-auto min-h-screen max-w-md rounded-2xl p-10 shadow-md">
    {/* <main className="min-h-dvh bg-orange-50 sm:px-4 sm:py-6">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-white px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(1rem+env(safe-area-inset-top))] sm:min-h-0 sm:rounded-3xl sm:shadow-lg"> */}
        {/* Title */}
        <header className="text-center">
          <h1 className="text-2xl font-bold text-gray-950">
            Order Placed!
          </h1>
        </header>

        <div className="pt-15">
          <OrderOrderPlacedBanner />

        </div>

       

        <div className="pt-15">
          <OrderPlacedActionButtons
          onOrderAgain={handleOrderAgain}
          onBackMenu={handleBackMenu}
        />
      </div>

    </div>

        
    </main>
  );
}