/* Admin portal logout button */

export default function LogoutButton() {
    return (
        <button className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-500">
            <span className="text-xl">
                🚪
            </span>
            
            <span>
                Logout
            </span>
        </button>

    );
}