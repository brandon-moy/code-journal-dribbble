import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { fetchProjectCount } from "@/lib/actions";

type ProjectSearch = {
  projectSearch: {
    searchInfo: {
      totalHits: number;
    };
  };
};

type Link = {
  title: string;
  url: string;
};

type ColumnProps = {
  title: string;
  links: Link[];
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column font-opensans">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href={link.url} key={link.title}>
          {link.title}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = async () => {
  const data = (await fetchProjectCount()) as ProjectSearch;
  const projectsCount = data?.projectSearch?.searchInfo?.totalHits || 0;

  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={115} height={38} alt="Logo" />
          <p className="text-start text-sm font-normal font-opensans mt-5 max-w-xs">
            Code Journal is a way for developer&apos;s to share, grow, and
            connect with over developers to create a community and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
          </div>
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@2023 CodeJournal. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">{projectsCount} </span>
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
