import { motion } from "motion/react";
import data from "@/src/data/services.json";
// import data from "/resources/data/services.json";

const Our_services = () => {
  const refineddata = data.map((d) => ({
    ...d,
    icon: "/resources/assets/service.png",
  }));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#03373D] w-4/5 rounded-4xl p-10 py-32 flex justify-center items-center flex-col space-y-12 relative"
    >
      <motion.p
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white"
      >
        Our Services
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-medium text-white w-1/2 text-center"
      >
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </motion.p>
      <div className="w-4/5 grid grid-cols-3 gap-8 p-6 justify-center items-center space-y-4">
        {refineddata.map((d, id) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                y: -19,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              key={id}
              className="bg-white hover:bg-lime-100 hover:scale-[1.1] rounded-md p-5 flex justify-center items-center flex-col space-y-10"
            >
              <img src={d.icon} loading="lazy" alt={d.title} />
              <div className="text-xl font-bold text-center h-13">
                {d.title}
              </div>
              <div className="w-4/5 h-28 text-center">{d.description}</div>
            </motion.div>
          );
        })}
      </div>
      {/* absolute design */}
      <div className="w-full h-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute w-20 p-1 rounded-full bg-white top-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute w-20 p-1 rounded-full bg-white bottom-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute h-20 p-1 rounded-full bg-white left-10 bottom-1/2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute h-20 p-1 rounded-full bg-white right-10 bottom-1/2"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Our_services;
