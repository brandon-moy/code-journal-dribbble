import { UserProfile } from "@/common.types";
// import ProfilePage from "@/components/ProfilePage";
import SettingsForm from "@/components/SettingsForm";
import { getUserProjects } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";

type Props = {
  params: {
    id: string;
  };
};

const UserSettings = async ({ params }: Props) => {
  const session = await getCurrentUser();
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };

  if (!result?.user) {
    return <p className="no-result-text">Failed to fetch user info</p>;
  }

  return <SettingsForm user={result?.user} session={session} />;
};

export default UserSettings;
