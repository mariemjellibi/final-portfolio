import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// SingleExperience.jsx
const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full md:w-[240px] md:min-h-[500px] border-2 border-orange border-dashed rounded-2xl p-4 mb-8 md:mb-0"
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="mb-2 last:mb-0">{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;