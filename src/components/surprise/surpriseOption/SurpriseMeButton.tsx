/**
 *  @file SurpriseMeButton.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the surprise me button component for the surprise option page.
 *                It displays a button that triggers the surprise action.
 */

type SurpriseMeButtonProps = {
  onSurprise: () => void;
};

export default function SurpriseMeButton({ onSurprise }: SurpriseMeButtonProps) {
  return (
    <button
      type="button"
      onClick={onSurprise}
      className="w-100 rounded-xl bg-orange-400 px-6 py-3 font-bold text-white"
    >
      Surprise Me
    </button>
  );
}
