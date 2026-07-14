/**
 *  @file StartPreparingButton.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This file is the mark all as served button component for the order details page.
 *               This is used to mark all items' statuses as served.         
 */

type StartPreparingButtonProps = {
    onClick: () => void;
    disabled?: boolean;
}

export default function StartPreparingButton({
    onClick,
    disabled,
}:StartPreparingButtonProps){
    return (
        // <button
        //     type="button"
        //     onClick={onClick}
        //     disabled={disabled}
        //     className="w-32 rounded-xl border border-orange-500 px-6 py-3 font-semibold text-gray-700"
        // >
        // Mark As Paid
        // </button>

        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
            Start Preparing
        </button>
    );
}
