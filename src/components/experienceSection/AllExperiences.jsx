import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const experiences = [
  {
    job: "Front-End Development Expertise",
    date: "2022 - Present",
    responsibilities: [
      "Developed reusable and modular components for various web applications.",
      "Contributed to the architecture and development of large-scale web apps.",
      "Optimized web application performance for faster load times and smooth user experience.",
      "Continuously generated and implemented innovative ideas to enhance user interface and user experience.",
    ],
  },
  {
    job: "Mentoring and Teaching Web Development",
    date: "2023 - Present",
    responsibilities: [
      "Explained and simplified complex web development concepts for beginners and advanced learners.",
      "Provided hands-on support to students, guiding them through coding exercises and project implementations.",
      "Evaluated assignments, providing constructive feedback to help students improve their skills.",
    ],
  },
  {
    job: "Instruction in Modern Web Technologies",
    date: "2024 - Present",
    responsibilities: [
      "Taught JavaScript, React, and TailwindCSS to students, focusing on building interactive and responsive web applications.",
      "Contributed to preparing detailed and engaging course materials for various web development topics.",
      "Guided students through practical projects, helping them apply their learning to real-world development scenarios.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;