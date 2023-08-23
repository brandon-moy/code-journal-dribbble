import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          className="w-full h-full object-cover rounded-2xl"
          width={414}
          height={314}
          alt="Project Image"
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full w-[24px] h-[24px]"
              alt="Profil Image"
            />
            <p>{name}</p>
          </div>
        </Link>
        {/* Below is code for likes and views - to be added in future branch */}
        {/* <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/heart.svg" width={13} height={12} alt="Heart" />
            <p className="text-sm">500 likes</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={13} height={12} alt="Views" />
            <p className="text-sm">5k</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
