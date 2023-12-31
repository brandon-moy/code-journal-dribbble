import Link from "next/link";
import Image from "next/image";

type Resource = {
  title: string;
  url?: string;
  imageUrl: string;
  description: string;
};

type ListProps = {
  resources: Resource[];
};

const LinkedImage = ({ resource }: { resource: Resource }) => {
  const url = resource.url || "";
  return (
    <Link href={url} className="flexCenter group relative w-full h-full">
      <div className="w-[414px] h-[250px]">
        <Image
          src={resource.imageUrl}
          className="w-full h-full object-cover rounded-2xl"
          width={414}
          height={314}
          alt="Project Image"
        />
      </div>
      <div className="flex profile_card-title">
        <p className="w-full">{resource.title}</p>
      </div>
    </Link>
  );
};

const HeroImage = ({ resource }: { resource: Resource }) => {
  return (
    <div className="flexCenter group relative w-full h-full">
      <div className="w-[414px] h-[250px]">
        <Image
          src={resource.imageUrl}
          className="w-full h-full object-cover rounded-2xl"
          width={414}
          height={314}
          alt="Project Image"
        />
      </div>
      <div className="flex profile_card-title">
        <p className="w-full">{resource.title}</p>
      </div>
    </div>
  );
};

const ResourceList = ({ resources }: ListProps) => {
  return (
    <>
      <ul className="projects-grid">
        {resources.map((resource) => (
          <li className="flex-col" key={resource.title}>
            <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
              {resource?.url ? (
                <LinkedImage resource={resource} />
              ) : (
                <HeroImage resource={resource} />
              )}
            </div>
            <p className="pt-4">{resource.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResourceList;
