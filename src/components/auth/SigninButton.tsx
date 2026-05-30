/* Signin button component */

import { useNavigate } from "react-router";

export default function BackToSignInButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate("/login")}
      className={"mt-2 font-semibold text-orange-500 hover:text-orange-600"}
    >
      Back to Sign In
    </button>
  );
}
