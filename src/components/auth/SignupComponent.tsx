/* Signup input component */

import { useState } from "react";
import { doSignup } from "../../helpers/auth/doSignup";
import FormField from "../common/FormField";
import Button from "../common/Button";
import { useNavigate } from "react-router";

export default function SignupComponent() {
  const [username, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await doSignup({ username, email, password });
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <FormField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your username"
      />

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

      <FormField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
      />

      <Button type="submit" text="Sign Up" />
    </form>
  );
}
