import { podcasts } from "@/constants";
import ResourceList from "@/components/ResourceList";

const Podcasts = () => {
  return (
    <section className="flex-start flex-col paddings mb-16 font-opensans">
      <p className="text-4xl font-semibold">Code Podcasts</p>
      <ResourceList resources={podcasts} />
    </section>
  );
};

export default Podcasts;
