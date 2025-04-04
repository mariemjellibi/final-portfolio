import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] py-10 space-y-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Show on large screens only */}
        <div className="hidden lg:block">
          <AllSkills />
        </div>

        {/* Show on small screens only */}
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
