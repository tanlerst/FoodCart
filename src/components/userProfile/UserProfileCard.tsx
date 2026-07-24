import { Mail, Pencil, UserRound } from "lucide-react";

import type { UserProfile } from "../../types/profile";

type UserProfileCardProps = {
  user: UserProfile;
  onEditProfile: () => void;
};

export default function UserProfileCard({
  user,
  onEditProfile,
}: UserProfileCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-orange-50">
            <UserRound
              size={44}
              strokeWidth={1.8}
              className="text-orange-500"
            />
          </div>
        </div>

        <div className="shrink-0">
          {/* Username */}
          <h2 className="truncate text-xl font-bold text-gray-900">
            {user.name}
          </h2>
          
          {/* User email */}
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <Mail size={17} />
            <span className="truncate">{user.email}</span>
          </div>
        </div>
        
        {/* Edit profile button */}
        <button
          type="button"
          onClick={onEditProfile}
          className="hidden items-center gap-2 rounded-xl border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-500 sm:flex"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>
    </article>
  );
}