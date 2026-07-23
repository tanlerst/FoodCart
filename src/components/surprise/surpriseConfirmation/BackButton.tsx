/**
 *  @file BackButton.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the back button component for the surprise confirmation page.
 *
 */

type BackButtonProps = {
  onClick: () => void;
};

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-14 rounded-xl border-2 border-orange-500 px-6 py-3 font-bold text-orange-500"
    >
      Back
    </button>
  );
}
