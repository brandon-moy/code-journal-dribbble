import ResourceList from "@/components/ResourceList";
import {
  beginnerProjects,
  intermediateProjects,
  advancedProjects,
} from "@/constants";

const ProjectIdeas = () => {
  return (
    <section className="flex-start flex-col paddings mb-16 font-opensans">
      <p className="text-4xl font-semibold">Project Ideas</p>
      <p className="text-2xl pt-10 font-semibold">Beginner Projects</p>
      <ResourceList resources={beginnerProjects} />
      <p className="text-2xl pt-10 font-semibold">Intermediate Projects</p>
      <ResourceList resources={intermediateProjects} />
      <p className="text-2xl pt-10 font-semibold">Advanced Projects</p>
      <ResourceList resources={advancedProjects} />
    </section>
  );
};

export default ProjectIdeas;
