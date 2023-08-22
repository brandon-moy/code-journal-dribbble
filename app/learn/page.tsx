import Link from "next/link";
import Image from "next/image";
import { learningResources } from "@/constants";
import { practiceResources } from "@/constants";

type Resource = {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
};

type ListProps = {
  resources: Resource[];
};

const ResourceList = ({ resources }: ListProps) => {
  return (
    <>
      <ul className="projects-grid">
        {resources.map((resource) => (
          <li className="flex-col" key={resource.title}>
            <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
              <Link
                href={resource.url}
                className="flexCenter group relative w-full h-full"
              >
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
            </div>
            <p className="pt-4">{resource.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const LearnDevelopment = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <p className="text-4xl font-semibold">Learning Resources</p>
      <ResourceList resources={learningResources} />
      <ResourceList resources={practiceResources} />
    </section>
  );
};

export default LearnDevelopment;
