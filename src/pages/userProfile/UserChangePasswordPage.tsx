import {
  ArrowLeft,
  LockKeyhole,
} from "lucide-react";

import UserChangePasswordForm from "../../components/userProfile/UserChangePasswordForm";

import type { ChangePasswordFormData } from "../../types/profile";

export default function UserChangePasswordPage() {

  function handleUpdatePassword(formData: ChangePasswordFormData ) {
    // Set new password to Supabase
    // success alert
    // back to profile page
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-md px-4 pb-10 pt-6">
        <header className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={() => 1} // TODO: go back to profile page
            className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full text-orange-500"
          >
            <ArrowLeft size={26} />
          </button>

          <h1 className="text-2xl font-bold text-gray-900">
            Change Password
          </h1>
        </header>

        <section className="mt-14">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
              <LockKeyhole
                size={36}
                strokeWidth={1.8}
                className="text-orange-500"
              />
            </div>

            <p className="mx-auto mt-6 max-w-sm leading-6 text-gray-600">
              Enter your current password and choose a new password.
            </p>
          </div>

          <div className="mt-10">
            <UserChangePasswordForm
              onSubmit={handleUpdatePassword}
            />
          </div>
        </section>
      </div>
    </main>
  );
}