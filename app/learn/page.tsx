import ResourceList from "@/components/ResourceList";
import { learningResources } from "@/constants";
import { practiceResources } from "@/constants";

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
