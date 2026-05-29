/* Reusable logout button on menu page*/

export default function LogoutButton({ onLogout }: {
    onLogout: () => void;
}) {

    const handleLogout = async () => {
        try {
            // await doLogin({ email, password });
            //     onLogin();
            } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
            }
        }
    };

    return (
        <button onClick={handleLogout} className="text-md text-orange-600 font-semibold">
            Logout
        </button>
    );
}

