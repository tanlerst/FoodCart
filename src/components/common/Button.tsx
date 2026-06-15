/* Reusable Button for Signup and Login */

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ type, text, onClick, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-orange-600 text-white font-semibold py-3 rounded-2xl"
    >
      {text}
    </button>
  );
}
