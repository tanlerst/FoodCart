import { useState } from "react";
import UserPasswordInput from "./UserPasswordInput";
import type { ChangePasswordFormData } from "../../types/profile";

type UserChangePasswordFormProps = {
  onSubmit: (formData: ChangePasswordFormData) => Promise<void>;
};

const INITIAL_FORM_DATA: ChangePasswordFormData = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function UserChangePasswordForm({ onSubmit }: UserChangePasswordFormProps) {
  const [formData, setFormData] = useState<ChangePasswordFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Current password */}
      <UserPasswordInput
        id="currentPassword"
        label="Current Password"
        value={formData.currentPassword}
        placeholder="Enter your current password"
        onChange={handleChange}
      />

      {/* New password */}
      <div>
        <UserPasswordInput
          id="newPassword"
          label="New Password"
          value={formData.newPassword}
          placeholder="Enter your new password"
          onChange={handleChange}
        />
      </div>

      {/* Confirm new password */}
      <UserPasswordInput
        id="confirmPassword"
        label="Confirm New Password"
        value={formData.confirmPassword}
        placeholder="Confirm your new password"
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-orange-500 px-5 py-4 font-semibold text-white shadow-sm disabled:opacity-60"
      >
        {isSubmitting ? "Updating Password..." : "Update Password"}
      </button>
    </form>
  );
}
