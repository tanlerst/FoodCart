import type { ReactNode } from "react";

type UserProfileSectionProps = {
  title: string;
  children: ReactNode;
};

export default function UserProfileSection({ title, children }: UserProfileSectionProps) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-gray-900">{title}</h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {children}
      </div>
    </section>
  );
}
