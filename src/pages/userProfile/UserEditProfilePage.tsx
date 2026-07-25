import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import EditProfileForm from "../../components/userProfile/editProfile/UserEditProfileForm";
import type { EditableProfile } from "../../types/profile";
import { getProfile } from "../../helpers/profile/getProfile";
import { updateProfile } from "../../helpers/profile/updateProfile";
import { useState, useEffect } from "react";

export default function UserEditProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<EditableProfile | null>(null);
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
    return <div className="p-8">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div className="p-8">Failed to load profile.</div>;
  }

  async function handleSave(profile: EditableProfile) {
    try {
      await updateProfile(profile);
      navigate("/user");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update profile.");
    }
  }

  function handleCancel() {
    navigate("/user");
  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 pb-10 pt-5">
      <div className="mx-auto w-full max-w-md">
        <header className="relative flex h-14 items-center justify-center">
          <button
            type="button"
            onClick={handleCancel}
            aria-label="Go back"
            className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full text-orange-500"
          >
            <ChevronLeft size={34} strokeWidth={2} />
          </button>

          <h1 className="text-2xl font-bold text-slate-900">Edit Profile</h1>
        </header>

        <div className="mt-5">
          <EditProfileForm initialProfile={profile} onSave={handleSave} onCancel={handleCancel} />
        </div>
      </div>
    </main>
  );
}
