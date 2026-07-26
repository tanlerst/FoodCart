/**
 *  @file MarkAsPaidButton.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the mark as paid button component for the order details page.
 *
 */

type MarkAsPaidButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function MarkAsPaidButton({ onClick, disabled }: MarkAsPaidButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Mark As Paid
    </button>
  );
}
