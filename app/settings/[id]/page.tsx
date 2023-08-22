import { UserProfile } from "@/common.types";
import SettingsForm from "@/components/SettingsForm";
import { getUserProjects } from "@/lib/actions";

type Props = {
  params: {
    id: string;
  };
};

const UserSettings = async ({ params }: Props) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };

  if (!result?.user) {
    return <p className="no-result-text">Failed to fetch user info</p>;
  }

  return (
    <div className="paddings">
      <SettingsForm user={result?.user} />;
    </div>
  );
};

export default UserSettings;
