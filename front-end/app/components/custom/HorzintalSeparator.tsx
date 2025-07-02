import { motion } from "motion/react";

const HorzintalSeparator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full border-t-4 border-t-slate-400 border-dashed md:my-9 md:mb-16 "
    />
  );
};

export default HorzintalSeparator;
