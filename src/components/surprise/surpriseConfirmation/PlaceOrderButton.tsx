/**
 *  @file Place Order Button.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the place order button component for the surprise confirmation page.
 *                
 */

type PlaceOrderButtonProps = {
    onClick: () => void;
};

export default function PlaceOrderButton({ onClick }: PlaceOrderButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="min-h-14 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white"
        >
            Place Order
        </button>
    );
}



