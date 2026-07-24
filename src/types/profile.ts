export type UserProfile = {
  name: string;
  email: string;
};

export type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type EditableProfile = {
  name: string;
  email: string;
};