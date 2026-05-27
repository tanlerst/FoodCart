/* Reusable Button for Signup and Login */

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
};

export default function Button({ type, text }: ButtonProps) {
  return (
    <button type={type} className="w-full bg-orange-600 text-white font-semibold py-3 rounded-2xl">
      {text}
    </button>
  );
}
