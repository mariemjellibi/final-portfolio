
import {
  FaHtml5, FaCss3Alt, FaReact, FaGit, FaDocker, FaPython, FaJava
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiMysql, SiGitlab, SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiBootstrap } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML5", icon: FaHtml5 },
  { skill: "CSS3", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: DiNodejs },
  { skill: "Express", icon: DiNodejs },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Git", icon: FaGit },
  { skill: "GitHub", icon: VscGithub },
  { skill: "GitLab", icon: SiGitlab },
  { skill: "Firebase", icon: SiFirebase },
  { skill: "Bootstrap", icon: DiBootstrap },
  { skill: "Docker", icon: FaDocker },
  { skill: "Figma", icon: FaGit }, // Consider replacing FaGit with a Figma icon (see note below)
  { skill: "Python", icon: FaPython },
  { skill: "Java", icon: FaJava },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange-400" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;