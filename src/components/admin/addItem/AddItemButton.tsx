/**
 *  @file AddItemButton.tsx
 *  @author Xi Yan 
 *  @version 1.0.0
 *  @description This is the add item button for the menu page in admin portal
 */

export default function SaveItemButton() {
    return (
        <button
            type="submit"
            className="flex rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white text-sm"
        >
            Add New Item
        </button>
    );
}