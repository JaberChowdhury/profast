import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "~/lib/utils";

type HorizontalSeparatorProps = HTMLMotionProps<"div">;

const HorizontalSeparator = ({
  className = "",
  ...props
}: HorizontalSeparatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "w-4/5 border-t-4 border-t-slate-400 border-dashed md:my-9 md:mb-16 ",
        className
      )}
      {...props}
    />
  );
};

export default HorizontalSeparator;
