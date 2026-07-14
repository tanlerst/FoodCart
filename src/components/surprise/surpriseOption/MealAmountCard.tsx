/**
 *  @file MealAmountCard.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the meal amount card component for the surprise option page. 
 *                It displays a card with the meal amount selection for the user.
 */

type MealAmountCardProps = {
    mealAmount: number;
    setMealAmount: (amount: number) => void;
};

export default function MealAmountCard({ mealAmount, setMealAmount }: MealAmountCardProps) {

    function decreaseMealAmount() {
        if(mealAmount > 1) {
            setMealAmount(mealAmount - 1);
        }
    }

    function increaseMealAmount() {
        setMealAmount(mealAmount + 1);
    }

    return (
        <section>
            <div className="mt-2">

            </div>
            <h2 className="mb-1 text-lg font-bold">
                Number of surprise meals
            </h2>

            {/* Button */}

            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex item-center justify-center gap-10">
                    <button 
                        type="button"
                        onClick={decreaseMealAmount}
                        className="flex h-10 w-10 item-center justify-center rounded-lg border border-orange-500 text-2xl text-orange-500 font-bold"
                    >
                        -
                    </button>

                    <span className="w-10 text-center text-3xl font-bold text-gray-900">
                        {mealAmount}
                    </span>

                    <button 
                        type="button"
                        onClick={increaseMealAmount}
                        className="flex h-10 w-10 item-center justify-center rounded-lg border border-orange-500 text-2xl text-orange-500 font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </section>
    );

}
