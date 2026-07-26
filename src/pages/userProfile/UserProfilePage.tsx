import { LockKeyhole, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import UserProfileCard from "../../components/userProfile/UserProfileCard";
import UserProfileSettingCard from "../../components/userProfile/UserProfileSettingCard";
import UserProfileSection from "../../components/userProfile/UserProfileSection";
import { useNavigate } from "react-router";
import type { UserProfile } from "../../types/profile";
import { getProfile } from "../../helpers/profile/getProfile";
import { supabase } from "../../utils/supabase";
import UserLayout from "../../layouts/UserLayout";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

  if (loading) {
    return (
      <UserLayout title="Your Profile">
        <p>Loading...</p>
      </UserLayout>
    );
  }

  if (error) {
    return (
      <UserLayout title="Your Profile">
        <p>Loading...</p>
      </UserLayout>
    );
  }

  if (!profile) {
    return <div className="p-8">Failed to load profile.</div>;
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <UserLayout title="Your Profile">
      <div className="space-y-7">
        <UserProfileCard user={profile} onEditProfile={() => navigate("/editprofile")} />

        {/* Change password */}
        <UserProfileSection title="Account">
          <UserProfileSettingCard
            title="Change Password"
            icon={LockKeyhole}
            onClick={() => navigate("/changepassword")}
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
    </UserLayout>
  );
}
