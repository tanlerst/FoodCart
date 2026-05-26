/* Reusable Form Field for forms, like email and password fields */

type FormFieldProps = {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function FormField({ label, type, value, onChange, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-gray-900 font-semibold mb-1">{label}</label>

      <div className="flex items-center border border-gray-300 rounded-2xl py-3 px-4">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-gray-900"
        />
      </div>
    </div>
  );
}
