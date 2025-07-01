import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "motion/react";
import { Button } from "../ui/button";

export default function Hero() {
  const [selected, setSelected] = useState(0);
  const images = [
    "/resources/assets/banner/banner1.png",
    "/resources/assets/banner/banner2.png",
    "/resources/assets/banner/banner3.png",
    // again
    "/resources/assets/banner/banner1.png",
    "/resources/assets/banner/banner2.png",
    "/resources/assets/banner/banner3.png",
  ];
  const opacity = useMotionValue(1);
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out: fade, shrink, and slide left/up
      Promise.all([
        animate(opacity, 0, { duration: 0.3 }),
        animate(scale, 0.95, { duration: 0.3 }),
        animate(x, -40, { duration: 0.3 }),
        animate(y, -20, { duration: 0.3 }),
      ]).then(() => {
        setSelected((prevSelected) => {
          const next = (prevSelected + 1) % images.length;
          // Animate in: fade, grow, and slide right/down
          animate(opacity, 1, { duration: 0.5 });
          animate(scale, 1, { duration: 0.5 });
          animate(x, 0, { duration: 0.5 });
          animate(y, 0, { duration: 0.5 });
          return next;
        });
      });
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <motion.div
      className="w-screen flex justify-center items-center overflow-hidden my-6 flex-col relative"
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
    >
      <motion.img
        style={{ opacity, scale, x, y }}
        src={images[selected]}
        alt={images[selected]}
        className="w-4/5 bg-cover"
      />
      {/* <div className="flex w-4/5 h-12 items-end justify-end gap-x-4 right-4/5 absolute top-4/5 ">
        {images.map((d, id) => {
          return (
            <Button
              onClick={() => setSelected(id)}
              key={id}
              className={`rounded-full ${
                selected == id ? "opacity-100" : "opacity-40"
              }`}
            ></Button>
          );
        })}
      </div> */}
    </motion.div>
  );
}
