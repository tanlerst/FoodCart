/**
 *  @file OptionButton.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description Option button for making selections
 */

type OptionButtonProps = {
    option: string;
    isSelected: boolean;
    onSelect: () => void;
};

export default function renderDietaryOption({
    option,
    isSelected,
    onSelect
}: OptionButtonProps) {

    const baseClass = "relative rounded-xl border px-4 py-3 text-sm font-medium transition";
    const selectedClass = "border-orange-500 bg-orange-50 text-orange-600";
    const unselectedClass = "border-gray-200 bg-white text-gray-900";

    return (
        <button
            type="button"
            onClick={onSelect}
            className={`${baseClass} ${isSelected? selectedClass: unselectedClass}`}
            >
            {option}
        </button>
    );
}
