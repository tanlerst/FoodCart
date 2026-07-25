import type { ChangeEvent, ReactNode } from "react";

type UserEditProfileInputProps = {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  icon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UserEditProfileInput({
  id,
  label,
  value,
  required = false,
  disabled = false,
  helperText,
  icon,
  onChange,
}: UserEditProfileInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-base font-semibold text-slate-900">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-500">
            {icon}
          </span>
        )}

        <input
          id={id}
          type="text"
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={[
            "h-14 w-full rounded-xl border border-slate-300",
            "text-base text-slate-900 outline-none",
            "focus:border-orange-500 focus:ring-2 focus:ring-orange-100",
            icon ? "pl-12 pr-4" : "px-4",
            disabled ? "bg-slate-50 text-slate-700" : "bg-white",
          ].join(" ")}
        />
      </div>

      {helperText && <p className="mt-2 text-sm text-slate-500">{helperText}</p>}
    </div>
  );
}
