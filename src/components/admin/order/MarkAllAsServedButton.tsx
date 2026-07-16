/**
 *  @file MarkAllAsServedButton.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the mark all as served button component for the order details page.
 *               This is used to mark all items' statuses as served.
 */

type MarkAllAsServedButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function MarkAllAsServedButton({ onClick, disabled }: MarkAllAsServedButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
    >
      Mark All as Served
    </button>
  );
}
