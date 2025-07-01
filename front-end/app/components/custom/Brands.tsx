import { motion } from "motion/react";
import a1 from "/resources/assets/brands/amazon.png";
import a2 from "/resources/assets/brands/amazon_vector.png";
import a3 from "/resources/assets/brands/casio.png";
import a4 from "/resources/assets/brands/moonstar.png";
import a5 from "/resources/assets/brands/randstad.png";
import a6 from "/resources/assets/brands/starpeople.png";
import a7 from "/resources/assets/brands/start.png";

const Brands = () => {
  const brands_logo = [a1, a2, a3, a4, a5, a6, a7];
  return (
    <div className="my-6">
      <motion.p
        initial={{ y: -89, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-bold text-center text-3xl my-12"
      >
        We've helped thousands of sales teams
      </motion.p>
      <motion.div className="w-full space-x-9 flex justify-around items-center flex-wrap">
        {brands_logo.map((d, id) => {
          return (
            <motion.img
              initial={{
                opacity: 0,
                x: id + 90,
                y: id - 90,
                scale: id - 4,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.34,
              }}
              key={id}
              src={d}
              alt={d}
              loading="lazy"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Brands;
