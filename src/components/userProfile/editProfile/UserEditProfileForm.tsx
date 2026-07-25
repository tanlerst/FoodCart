import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

import type { EditableProfile } from "../../../types/profile";
import UserEditProfileInput from "./UserEditProfileInput";

type EditProfileFormProps = {
  initialProfile: EditableProfile;
  onSave: (profile: EditableProfile) => void | Promise<void>;
  onCancel: () => void;
};

export default function EditProfileForm({
  initialProfile,
  onSave,
  onCancel,
}: EditProfileFormProps) {
  const [name, setName] = useState(initialProfile.name);
  const [email, setEmail] = useState(initialProfile.email);

  useEffect(() => {
    setName(initialProfile.name);
    setEmail(initialProfile.email);
  }, [initialProfile]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSave({
      name: name.trim(),
      email: email.trim(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8"
    >
      <div className="mt-10 space-y-6">
        <UserEditProfileInput
          id="profile-name"
          label="Name"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />

        <UserEditProfileInput
          id="profile-email"
          label="Email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          icon={<Mail size={21} />}
        />
      </div>

      {/* Save changes button */}
      <div className="mt-10 space-y-3">
        <button
          type="submit"
          className="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white active:scale-[0.99]"
        >
          Save Changes
        </button>

        {/* Cancel button */}
        <button
          type="button"
          onClick={onCancel}
          className="h-14 w-full rounded-xl border-2 border-orange-500 bg-white text-base font-semibold text-orange-500 active:scale-[0.99]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
