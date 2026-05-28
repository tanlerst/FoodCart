/* Login card component */

import { useState } from "react";
import { doLogin } from "../../helpers/auth/doLogin";
import FormField from "../common/FormField";
import Button from "../common/Button";



export default function LoginCard({onLogin}: {
  onLogin: ()=>void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await doLogin({ email, password });
      onLogin();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <FormField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <div className="text-right">
        <a href="/forgot-password" className="text-sm text-orange-600 font-semibold">
          Forgot Password?
        </a>
      </div>

      <Button type="submit" text="Log In" />
    </form>
  );
}
