import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaDocker, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs, SiRedux, SiMysql, SiMongodb, SiGitlab, SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiBootstrap, DiNodejs } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Array of skills with respective icons
const skills = [
  { skill: "HTML5", icon: <FaHtml5 /> },
  { skill: "CSS3", icon: <FaCss3Alt /> },
  { skill: "JavaScript", icon: <IoLogoJavascript /> },
  { skill: "TypeScript", icon: <SiTypescript /> },
  { skill: "ReactJS", icon: <FaReact /> },
  { skill: "Redux", icon: <SiRedux /> },
  { skill: "NextJS", icon: <SiNextdotjs /> },
  { skill: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { skill: "Node.js", icon: <DiNodejs /> },
  { skill: "Express", icon: <DiNodejs /> },
  { skill: "MongoDB", icon: <SiMongodb /> },
  { skill: "MySQL", icon: <SiMysql /> },
  { skill: "Git", icon: <FaGit /> },
  { skill: "GitHub", icon: <VscGithub /> },
  { skill: "GitLab", icon: <SiGitlab /> },
  { skill: "Firebase", icon: <SiFirebase /> },
  { skill: "Bootstrap", icon: <DiBootstrap /> },
  { skill: "Docker", icon: <FaDocker /> },
  { skill: "Figma", icon: <FaGit /> },
  { skill: "Python", icon: <FaPython /> },
  { skill: "Java", icon: <FaJava /> },
];

const AllSkills = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {skills.map((item, index) => {
          console.log(`Rendering ${item.skill}`); // Check if skills are being rendered
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              key={index}
            >
              <SingleSkill text={item.skill} imgSvg={item.icon} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
