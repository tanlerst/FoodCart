/* Login card component */

import {useState} from "react";
import { doLogin } from "./doLogin";

export default function LoginCard() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        await doLogin({ email, password });
        alert("Login successful");
        } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
        }
    };

    return(
        <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <label className="block text-gray-900 font-semibold mb-1">
                    Email
                </label>
                
                <div className="items-center border border-gray-300 rounded-2xl py-3 px-4">

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full text-gray-900"
                />

                </div>
            </div>

            <div>
                <label className="block text-gray-900 font-semibold mb-1">
                    Password
                </label>
                
                <div className="items-center border border-gray-300 rounded-2xl py-3 px-4">
                    
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full text-gray-900"
                />
                </div>
            </div>

            <div className="text-right">
                <a href="/forgot-password" className="text-sm text-orange-600 font-semibold">
                    Forgot Password?
                </a>


            </div>

            <button type="submit" className="w-full bg-orange-600 text-white font-semibold py-3 rounded-2xl">
                Log In
            </button>
        </form>
    );

}


