import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import { projects, stacks } from "../common";
import { Avatar, Chip } from "@mui/material";
import ProjectCard from "./ProjectCard";

const MainContent = () => {
  return (
    <div className="custom-scroll-container h-full bg-white border border-gray-300 rounded-md shadow-md p-3 overflow-x-hidden overflow-y-scroll">
      <p className="text-xs text-gray-600">jacquah/README.md</p>
      <h1 className="text-2xl font-bold py-2">👋 Hi there, I am Joel!</h1>
      <Divider />
      <Box m={1} />
      <p>🚀 Flutter Specialist | 🎩 Full Stack Developer | 🎯 Problem Solver</p>
      <Box m={2} />
      {/* About me */}
      <div>
        <h2 className="text-xl font-bold">🌟 About Me</h2>
        <ul className="list-disc pl-6">
          <li>
            Currently working on{" "}
            <a
              target="_blank"
              className="text-blue-600 hover:underline"
              href="https://github.com/joelaj06/auto-manager"
            >
              Auto Manager
            </a>
          </li>
          <li>
            Currently working as a software engineer at{" "}
            <a
              target="_blank"
              className="text-blue-600 hover:underline"
              href="https://www.appsolinfosystems.com"
            >
              Appsol Information Systems
            </a>
            .
          </li>
          <li>Opened to freelance projects and remote work.</li>
        </ul>
      </div>
      {/* Tech Stack */}
      <Box m={2} />
      <div>
        <h2 className="text-xl font-bold">🛠 Tech Stack</h2>
        <div className="flex flex-row gap-2 p-1">
          {stacks.map((stack, index) => (
            <Chip
              key={index}
              avatar={<Avatar alt="Natacha" src={stack.image} />}
              label={stack.name}
              variant="outlined"
              sx={{
                // backgroundColor: stack.color,
                // color: "white",
                borderRadius: "6px",
                height: "1.5rem",
                paddingBlock: "1.0rem",
                borderColor: stack.color,
              }}
            />
          ))}
        </div>
      </div>
      {/* Projects */}
      <Box m={2} />
      <div>
        <h2 className="text-xl font-bold">🚀 Featured Projects</h2>
        <div className="flex flex-row gap-1 flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
