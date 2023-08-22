import Link from "next/link";
import { podcasts } from "@/constants";

const PodcastList = () => {
  return (
    <>
      <ul className="projects-grid">
        {podcasts.map((podcast) => (
          <li className="flex-col" key={podcast.title}>
            <Link
              href={podcast.url}
              className="font-bold text-xl text-primary-purple"
            >
              {podcast.title}
            </Link>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const Podcasts = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <p className="text-4xl font-semibold">Code Podcasts</p>
      <PodcastList />
    </section>
  );
};

export default Podcasts;
