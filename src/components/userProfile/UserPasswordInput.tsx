type UserPasswordInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: () => void;
};

export default function UserPasswordInput({
  id,
  label,
  value,
  placeholder,
  onChange,
}: UserPasswordInputProps) {

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-semibold text-gray-800"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full rounded-xl border bg-white px-4 py-4 pr-12 text-gray-900 outline-none placeholder:text-gray-400 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>
    </div>
  );
}