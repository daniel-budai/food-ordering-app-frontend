import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/User-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
