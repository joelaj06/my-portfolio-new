import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import { useState, useRef } from "react";
import AboutSection from "./AboutSection";
import GridOverlay from "./GridOverlay";
import ProjectsSection from "./ProjectsSection";
import TechStack from "./TechStack";

const MainContent = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const containerRef = useRef<HTMLDivElement>(null);
  const radius = 50; // Radius of visible grid area
  const blurRadius = 50; // Soft edge blur

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePos({ x, y });
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative custom-scroll-container h-full border border-[#0799c8] rounded-md shadow-lg shadow-[#0799c8]/50 p-3 overflow-x-hidden overflow-y-scroll"
    >
      <GridOverlay
        mousePos={mousePos}
        radius={radius}
        blurRadius={blurRadius}
      />

      {/* Main Content */}
      <p className="text-xs text-gray-600">jacquah/README.md</p>
      <h1 className="text-2xl font-bold py-2">👋 Hi there, I am Joel!</h1>
      <Divider color="gray" />
      <Box m={1} />
      <p>🚀 Flutter Specialist | 🎩 Full Stack Developer | 🎯 Problem Solver</p>
      <Box m={2} />

      <AboutSection />
      <Box m={2} />
      <TechStack />
      <Box m={2} />
      <ProjectsSection />
    </div>
  );
};

export default MainContent;
