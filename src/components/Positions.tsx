import { Briefcase, Calendar, Star } from "@phosphor-icons/react";
import LogoZoho from "../assets/img/zoho_logo.jpg";
import LogoIE from "../assets/img/insignia_encorp_logo.jpg";
import LogoSLE from "../assets/img/shree_lakshmi_engineering_logo.jpg";

type Position = {
  logo: string;
  title: string;
  link: string;
  description: string;
  tech: string[];
  role: string;
  date: string;
  subItems?: {
    title: string;
    role?: string;
    description: string;
    date: string;
    tech?: string[];
    link?: string;
    isPromotion?: boolean;
  }[];
};

const Positions = () => {
  const positions: Position[] = [
    {
      logo: LogoZoho,
      title: "Zoho Corporation",
      link: "https://www.zoho.com/",
      description:
        "Fullstack Software Engineer at Doxy.me, a telemedicine platform used by ⅓ of the entire U.S. healthcare system. I work on the core product, building new features and improving existing ones.",
      tech: ["Nest.js", "Next.js", "Agile", "TypeScript", "React"],
      role: "Member Technical Staff",
      date: "September 2023 - Present",
      subItems: [
        {
          title: "Zoho - Member Technical Staff",
          description:
            "Spearheaded the development of a tax-compliant edition of Zoho Books for South Africa, broadening its global reach and usability. Coordinated developers and managed testing across multiple Zoho Finance applications, including Zoho Expense, Zoho Commerce, Zoho Inventory, Zoho Invoice, as well as on Windows and iOS platforms. Developed the TDS returns feature for Zoho Books Kenya, streamlining tax filing for users in the region. Enhanced both tax and non-tax modules in line with regional financial laws to improve functionality and compliance.",
          date: "June 2023 - July 2024",
        },
        {
          title: "Zoho - Project Trainee",
          description:
            "Served on the support team, resolving technical queries and developer tickets to improve user engagement. Resolved production issues, fixed bugs, and contributed to code enhancements and feature development for Zoho Books, tailored to the MEA region.",
          date: "August 2022 - May 2023",
          tech: ["RTK Query", "MUI X Charts"],
        },
        {
          title: "Zoho - Summer Intern",
          description:
            "Gained knowledge in financial accounting, analyzed MEA region finance regulations, and applied them in my work. Mastered JDBC, SDLC, Git, MySQL, Redis, REST APIs, and Servlets during training, utilizing these skills to develop a banking application.",
          date: "March 2022 - July 2022",
          link: "https://help.doxy.me/en/articles/95902-start-a-group-call",
          tech: ["WebRTC", "Vonage", "Storybook"],
        },
      ],
    },
    {
      logo: LogoIE,
      title: "Vodafone Group",
      link: "https://www.vodafone.co.uk/business/unified-communications",
      description:
        "Worked at Vodafone Group; UK's, India's and Italy's biggest mobile network operator. I worked on Vodafone Group Business web applications using React TypeScript, AWS and Micro FEs in the Enterprise Apps team. \n\nI achieved Top Performer status for two years in a row, despite working as an Apprentice completing my degree at the same time.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
      date: "September 2019 - September 2023",
    },
    {
      logo: LogoIE,
      title: "Insignia Encorp",
      link: "https://www.instagram.com/insignia_encorp/?hl=en",
      description:
        "Attended an Android app development workshop, creating scalable applications using Java and XML. Represented the team and secured victories in multiple hackathons, leveraging skills gained from the workshop. Contributed to the design team, creating impactful graphic designs and honing expertise in Adobe Creative Cloud.",
      tech: [
        "Firebase",
        "Realtime Firestore",
        "Next.js",
        "Google Cloud Functions",
      ],
      role: "Software Development Engineer - I",
      date: "February 2022 - Present",
    },
  ];

  return (
    <div className="relative px-4 lg:px-2 overflow-x-hidden lg:overflow-x-visible">
      <ol className="relative border-l dark:border-gray-800">
        {positions.map((p, i) => (
          <li key={i} className="mb-10 ml-6">
            <div className="bg-gray-800 px-4 py-3 rounded-lg">
              <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 rounded-full ring-8 ring-white dark:ring-gray-900">
                <img
                  src={p.logo}
                  alt={p.title}
                  className="w-full h-full rounded-full"
                />
              </span>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                {p.role}
              </p>
              <p className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300 prose prose-invert min-w-full">
                {p.description}
              </p>

              {p.link && (
                <a
                  href={p.link}
                  className="text-blue-300 underline break-all"
                  target="_blank"
                >
                  {p.link}
                </a>
              )}

              <div className="mt-4 flex flex-wrap">
                {p.tech.map((tech) => (
                  <div
                    key={tech}
                    className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                <Calendar size={16} />
                <time>{p.date}</time>
              </div>
            </div>

            {p.subItems && (
              <ol className="mt-7 space-y-10 relative border-l dark:border-gray-800">
                {p.subItems?.map((subItem, i) => (
                  <li key={i} className="p-1 ml-6">
                    <span className="absolute -left-3.5">
                      {subItem.isPromotion ? (
                        <span className="flex justify-center items-center w-7 h-7 bg-yellow-200 rounded-full dark:bg-gray-700">
                          <Star size="20px" />
                        </span>
                      ) : (
                        <span className="flex justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700">
                          <Briefcase size="20px" />
                        </span>
                      )}

                      <img
                        src={p.logo}
                        alt={p.title}
                        className="w-4 h-4 absolute z-[2] rounded-full bottom-[-2px] right-[-2px]"
                      />
                    </span>

                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      {subItem.isPromotion && (
                        <div className="text-sm font-bold px-2 border rounded mr-2">
                          Promotion
                        </div>
                      )}

                      <h4 className="flex items-center font-semibold text-md text-gray-900 dark:text-white">
                        {subItem.title}
                      </h4>
                    </div>

                    {subItem.role && (
                      <p className="block  text-sm font-normal leading-none text-gray-400">
                        {subItem.role}
                      </p>
                    )}

                    <p className="mb-4 mt-3 text-base font-normal text-gray-400 prose prose-invert min-w-full">
                      {subItem.description}
                    </p>

                    <a
                      href={subItem.link}
                      className="text-blue-300 underline break-all"
                      target="_blank"
                    >
                      {subItem.link}
                    </a>

                    {subItem.tech && (
                      <div className="mt-4 flex flex-wrap">
                        {subItem.tech.map((tech) => (
                          <div
                            key={tech}
                            className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-gray-300"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                      <Calendar size={16} />
                      <time>{subItem.date}</time>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Positions;
