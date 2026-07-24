import { LockKeyhole, LogOut } from "lucide-react";

import NavigationBar from "../../components/common/NavigationBar";
import UserProfileCard from "../../components/userProfile/UserProfileCard";
import UserProfileSettingCard from "../../components/userProfile/UserProfileSettingCard";
import UserProfileSection from "../../components/userProfile/UserProfileSection";

import type { UserProfile } from "../../types/profile";

// hard coded data
const SAMPLE_USER: UserProfile = {
  name: "Alice",
  email: "alice@gmail.com",
};

export default function UserProfilePage() {

  function handleEditProfile() {
    // navigate to profile edit page
    
  }

  function handleLogout() {
    // logout
  }

  return (
    <main className="min-h-screen bg-orange-50/60 pb-28">
      <div className="mx-auto w-full max-w-md px-4 pb-6 pt-8">
        <header className="mb-7">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Profile
          </h1>
        </header>

        <div className="space-y-7">
          <UserProfileCard
            user={SAMPLE_USER}
            onEditProfile={handleEditProfile}
          />

          {/* Change password */}
          <UserProfileSection title="Account">
            <UserProfileSettingCard
              title="Change Password"
              icon={LockKeyhole}
              onClick={() => 1} // TODO: navigate to change password page
            />
          </UserProfileSection>

          {/* Support */}
          <UserProfileSection title="Support">
            <UserProfileSettingCard
              title="Log Out"
              icon={LogOut}
              onClick={handleLogout}
              variant="destructive"
            />
          </UserProfileSection>
        </div>
      </div>

      <NavigationBar />
    </main>
  );
}