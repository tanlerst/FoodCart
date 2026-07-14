/**
 *  @file SurpriseConfrmationPage.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the surprise confirmation page. 
 *                
 */

import BackButton from "../../components/surprise/surpriseConfirmation/BackButton"
import PlaceOrderButton from "../../components/surprise/surpriseConfirmation/PlaceOrderButton";


export default function SurpriseConfrmationPage() {

    return (

        <main className="min-h-screen bg-orange-50 p-4">
            <div className="relative mx-auto min-h-screen max-w-md rounded-2xl p-10 shadow-md">
            
                {/* Buttons */}
                <div className="mt-auto grid grid-cols-[0.9fr_1.1fr] gap-4 pt-8">
                    <BackButton onClick={() => {}} />

                    <PlaceOrderButton onClick={() => {}} />
                </div>

            </div>
        </main>
    );
}