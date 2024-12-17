import { Briefcase, Calendar, Star } from "@phosphor-icons/react";
import ProjectLogo1 from "../assets/img/sample.png";
import ProjectLogo2 from "../assets/img/sample.png";
import ProjectLogo3 from "../assets/img/sample.png";

type Project = {
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

const Projects = () => {
  const projects: Project[] = [
    {
      logo: ProjectLogo1,
      title: "Project 1",
      link: "https://project1.com",
      description: "This is the description of Project 1. It includes key features and functionality.",
      tech: ["React", "Node.js", "MongoDB"],
      role: "Lead Developer",
      date: "January 2023 - Present",
    },
    {
      logo: ProjectLogo2,
      title: "Project 2",
      link: "https://project2.com",
      description: "This is the description of Project 2. It highlights major achievements and contributions.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      role: "Frontend Developer",
      date: "June 2022 - December 2022",
    },
    {
      logo: ProjectLogo3,
      title: "Project 3",
      link: "https://project3.com",
      description: "Project 3 is an innovative project that focuses on cutting-edge technologies and UI design.",
      tech: ["Next.js", "TypeScript", "GraphQL"],
      role: "Fullstack Developer",
      date: "March 2021 - May 2022",
    },
  ];

  return (
    <div className="relative px-4 lg:px-2 overflow-x-hidden lg:overflow-x-visible">
      <div>
        {projects.map((p, i) => (
          <div key={i} className="mb-10">
            <div className="bg-gray-800 px-4 py-3 rounded-lg">
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="block mb-3 text-sm font-normal leading-none text-gray-400">{p.role}</p>
                {/* Image placed after description */}
                <div className="w-25 h-30">
                  <img src={p.logo} alt={p.title} className="w-full h-full object-cover rounded-md" />
                </div>
                {/* Description */}
                <p className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300 prose prose-invert min-w-full">
                  {p.description}
                </p>

                

                {p.link && (
                  <a
                    href={p.link}
                    className="text-blue-300 underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.link}
                  </a>
                )}

                <div className="mt-4 flex flex-wrap">
                  {p.tech.map((tech) => (
                    <div
                      key={tech}
                      className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-200"
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
                <div className="mt-7">
                  {p.subItems.map((subItem, i) => (
                    <div key={i} className="mb-8">
                      <div className="flex items-center space-x-4">
                        {subItem.isPromotion ? (
                          <div className="w-7 h-7 flex justify-center items-center bg-yellow-200 rounded-full dark:bg-gray-700">
                            <Star size="20px" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 flex justify-center items-center bg-blue-200 rounded-full dark:bg-gray-700">
                            <Briefcase size="20px" />
                          </div>
                        )}

                        <div className="flex flex-col">
                          <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                            {subItem.title}
                          </h4>
                          {subItem.role && (
                            <p className="block text-sm font-normal leading-none text-gray-400">
                              {subItem.role}
                            </p>
                          )}
                          <p className="mb-4 mt-3 text-base font-normal text-gray-400 prose prose-invert min-w-full">
                            {subItem.description}
                          </p>
                          {subItem.link && (
                            <a
                              href={subItem.link}
                              className="text-blue-300 underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem.link}
                            </a>
                          )}
                          <div className="mt-4 flex flex-wrap">
                            {subItem.tech?.map((tech) => (
                              <div
                                key={tech}
                                className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 text-gray-300"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                            <Calendar size={16} />
                            <time>{subItem.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;