/* Food recommendation browse menu button component to exit food recommendation page and browse menu directly*/

type BrowseMenuButtonProps = {
  onBrowseMenu: () => void;
};

export default function BrowseMenuButton({ onBrowseMenu }: BrowseMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onBrowseMenu}
      className="w-40 rounded-xl border-2 border-orange-500 bg-white px-6 py-3 font-bold text-orange-500"
    >
      Browse Menu
    </button>
  );
}
