/* Admin card component on landing page before login */

export default function AdminCard() {
    return (
        <div className="rounded-3xl bg-white p-10 shadow-xl">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-orange-50 text-6xl text-orange-800">
                    📋
                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                    Admin
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                    Manage menus, orders,
                <br />
                    and restaurant operations.
                </p>

                <button
                    type="button"
                    // onClick=
                    className="mt-12 flex w-full items-center justify-center gap-3 rounded-xl border border-orange-600 bg-white px-6 py-4 text-lg font-semibold text-orange-600 transition hover:bg-orange-50"
                >
                    Continue as Admin
                    
                    <span className="text-2xl">
                        ›
                    </span>
                </button>
        </div>

    );
}