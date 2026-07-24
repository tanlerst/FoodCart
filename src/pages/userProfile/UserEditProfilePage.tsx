import { ChevronLeft, } from "lucide-react";

import EditProfileForm from "../../components/userProfile/editProfile/UserEditProfileForm";
import type { EditableProfile } from "../../types/profile";

// hard coded value 
// TODO
const INITIAL_PROFILE: EditableProfile = {
  name: "Alice",
  email: "alice@gmail.com",
};

export default function UserEditProfilePage() {

  function handleSave(profile: EditableProfile) {
    // TODO: update database
  }

  function handleCancel() {
    // navigate to user profile
  }

  return (
    <main className="min-h-screen bg-orange-50/50 px-4 pb-10 pt-5">
      <div className="mx-auto w-full max-w-md">
        <header className="relative flex h-14 items-center justify-center">
          <button
            type="button"
            onClick={handleCancel}
            aria-label="Go back"
            className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full text-orange-500"
          >
            <ChevronLeft
              size={34}
              strokeWidth={2}
            />
          </button>

          <h1 className="text-2xl font-bold text-slate-900">
            Edit Profile
          </h1>
        </header>

        <div className="mt-5">
          <EditProfileForm
            initialProfile={INITIAL_PROFILE}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </div>
      </div>
    </main>
  );
}