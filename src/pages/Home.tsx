import Container from "../components/Container";
import Positions from "../components/Positions";
import Exp from "../components/Exp";
import Me from "../assets/img/image.png";
import utdLogo from "../assets/img/utd.png";
import zohoLogo from "../assets/img/zoho.jpg";
import Education from "../components/Education";
import github from "../assets/img/GitHub-Mark-ea2971cee799.png";
import {
  EnvelopeSimple,
  LinkedinLogo,
  HouseLine,
  CalendarPlus,
  GithubLogo,
  Code,
} from "@phosphor-icons/react";
import TechTags from "../components/TechTags";
import DevParadigmBox from "../components/DevParadigmBox";
import {
  AWSIcon,
  ChakraIcon,
  CypressIcon,
  DigitalOceanIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  IllustratorIcon,
  JestIcon,
  LernaIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  ReactIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "../components/icons";
import GitLabIcon from "../components/icons/GitLabIcon";
import LogoDoxyMe from "../assets/img/doxyme.webp";
import "tippy.js/dist/tippy.css";
import { JOB_TITLE } from "../config";
import Tippy from "@tippyjs/react";
import CurrentTime from "../components/CurrentTime";
import {
  track_linkedin_connect,
  track_schedule_a_call,
} from "../lib/analytics";
import { motion } from "framer-motion";

const Home = () => (
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.1 }}
    >
      <div className="flex items-start justify-between">
        <img
          className="rounded-full mb-2 border-4 border-gray-800 w-28 h-28 md:w-[150px] md:h-[150px]"
          alt="Faheem Jinna"
          src={Me}
        />
      </div>
      <div className="flex items-center align-middle space-x-2">
        <h1 className="text-3xl md:text-4xl font-extrabold">Faheem Jinna</h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-2.5">
        <div className="flex items-center space-x-2 text-gray-300 text-sm md:text-md">
        <h2>Graduate Student at</h2>
        <img
          src={utdLogo}
          alt="Current employer badge"
          className="w-6 h-6 rounded-full"
        />
        <p>University of Texas at Dallas</p>
        </div>

        {/* Separator (visible on desktop, hidden on mobile) */}
        <span className="hidden md:inline-block mx-2 text-gray-300">|</span>

          <div className="flex items-center space-x-2 text-gray-300 text-sm md:text-md">
         <h2>Ex-Developer at</h2>
        <img
          src={zohoLogo}
          alt="Previous employer badge"
          className="w-6 h-6 rounded-full"
        />
      <p>Zoho</p>
    </div>
  </div>
      
      <p className="prose prose-invert min-w-full my-5">
        Hi there!👋 I'm Faheem Jinna, currently residing in Richardson, TX. I build impactful and tailored software solutions. As a Software Developer, I specialize in crafting innovative and efficient software applications for individuals and organizations who value seamless functionality and creative design. With a strong focus on delivering results, I transform ideas into reliable, scalable, and user-friendly solutions that make a real difference. 
      </p>
      <div className="my-6 space-y-1">
        <div className="flex items-center text-gray-400 transition-all ease-in-out">
          <HouseLine size="20px" className="mr-2" />
          <span>
            Richardson, Texas{" "}
            <span className="hidden md:visible">
              (currently
              <span className="ml-1">
                <CurrentTime />
              </span>
              )
            </span>
          </span>
        </div>

        <a
          href="mailto:faheemjinna.s@gmail.com"
          className="hover:underline inline-block"
        >
          <div className="flex items-center text-blue-300 underline">
            <EnvelopeSimple size="20px" className="mr-2" />
            faheemjinna.s@gmail.com
          </div>
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-2.5">

  <div className="flex flex-col md:flex-row space-y-3 md:space-y-2 md:space-x-3">
    <a
      id="linkedInButton"
      href="https://www.linkedin.com/in/faheemjinna/"
      onClick={track_linkedin_connect}
      target="_blank"
      className="bg-[#005E93] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-3 md:py-2 rounded inline-flex items-center space-x-2"
    >
      <LinkedinLogo size={20} />
      <span>LinkedIn</span>
    </a>
  </div>

  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
    <a
      id="linkedInButton"
      href="https://github.com/faheemjinna"
      onClick={track_linkedin_connect}
      target="_blank"
      className="bg-[#000000] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-3 md:py-2 rounded inline-flex items-center space-x-2"
    >
      <GithubLogo size={20} />
      <span>Github</span>
    </a>
  </div>

  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
    <a
      id="linkedInButton"
      href="https://leetcode.com/u/FaheemJinnaSulaiman/"
      onClick={track_linkedin_connect}
      target="_blank"
      className="bg-[#ffa119] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-3 md:py-2 rounded inline-flex items-center space-x-2"
    >
      <Code size={20} />
      <span>LeetCode</span>
    </a>
  </div>
</div>
    </motion.div>

    <hr className="border-gray-800 my-6" />

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.2 }}
    >
      <h3 className="mb-4 text-xl font-semibold">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <DevParadigmBox
          title="Apps"
          desc="Browser apps, websites, mobile and cross-platform desktop app development. \n\n From SSG, SSR to SPAs, I have extensive experience optimising for all rendering methods."
          techTags={[
            {
              text: "TypeScript",
              icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
            },
            {
              text: "React",
              icon: <ReactIcon className="fill-cyan-500" />,
            },
            {
              text: "Electron",
              icon: <ReactIcon className="fill-cyan-500" />,
            },
            {
              text: "Next.js (SSR/SSG)",
              icon: <NextIcon size={15} />,
            },
            {
              text: "Chakra UI",
              icon: <ChakraIcon size={14} className="text-teal-400" />,
            },
            {
              text: "Tailwind CSS",
              icon: <TailwindIcon className="text-cyan-500" />,
            },
            {
              text: "Styled Components",
              icon: <StyledComponentsIcon />,
            },
            {
              text: "Micro Frontends",
              icon: <WebpackIcon className="fill-cyan-500" />,
            },
            {
              text: "Figma",
              icon: <FigmaIcon size={14} className="fill-purple-500" />,
            },
            {
              text: "Adobe Photoshop",
              icon: <PhotoshopIcon className="fill-blue-400" />,
            },
            {
              text: "Adobe Illustrator",
              icon: <IllustratorIcon />,
            },
          ]}
        />
        <DevParadigmBox
          title="APIs"
          desc="RESTful APIs, microservices, serverless functions, and more.
        \n\n I have experience building and scaling APIs for both internal and external use.
        "
          techTags={[
            {
              text: "Express",
              icon: <ExpressIcon />,
            },
            {
              text: "Node.js",
              icon: <NodeIcon size={14} className="fill-green-500" />,
            },
            {
              text: "MongoDB",
              icon: <MongoIcon className="fill-green-500" />,
            },
            {
              text: "AWS",
              icon: <AWSIcon className="fill-yellow-500" />,
            },
            {
              text: "DigitalOcean",
              icon: <DigitalOceanIcon />,
            },
            {
              text: "Firebase",
              icon: <FirebaseIcon />,
            },
          ]}
        />
        <DevParadigmBox
          title="QA"
          desc="I've worked with a variety of tools to ensure our code is always of the highest quality. \n\n I also have an eye for precise, sharp design and great UX which I apply to my work."
          techTags={[
            {
              text: "Git",
              icon: <GitIcon />,
            },
            {
              text: "GitLab CI/CD",
              icon: <GitLabIcon />,
            },
            {
              text: "Jest",
              icon: <JestIcon size={15} />,
            },
            {
              text: "Cypress",
              icon: <CypressIcon className="fill-cyan-500" />,
            },
            {
              text: "Lerna Monorepos",
              icon: <LernaIcon />,
            },
            {
              text: "Module Federation",
              icon: <WebpackIcon className="fill-cyan-500" />,
            },
          ]}
        /> */}
      </div>
      <TechTags/>
    </motion.div>

    <motion.hr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.4 }}
      className="border-gray-800 my-6"
    />

    <h3 className="mb-8 text-xl font-semibold">Experience</h3>
    <Positions />
    <h3 className="mb-8 text-xl font-semibold">Projects</h3>
    <Exp />
    <h3 className="mb-8 text-xl font-semibold">Education</h3>
    <Education />
  </Container>
);

export default Home;
