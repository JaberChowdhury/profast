import { motion } from "motion/react";

const Howitworks = () => {
  const data = [
    {
      icon: "/resources/assets/bookingIcon.png",
      title: "Booking Pick & Drop",
      describe:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: "/resources/assets/bookingIcon.png",
      title: "Cash On Delivery",
      describe:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: "/resources/assets/bookingIcon.png",
      title: "Delivery Hub",
      describe:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: "/resources/assets/bookingIcon.png",
      title: "Booking SME & Corporate",
      describe:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="w-4/5 justify-center items-center space-y-4">
      <motion.p
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-4xl font-bold"
      >
        How it works
      </motion.p>
      <div className=" grid grid-cols-4 justify-center items-center gap-x-4">
        {data.map((d, id) => {
          return (
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
                x: 5,
                y: 9,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
              }}
              key={id}
              className="p-8 bg-white rounded-md space-y-4"
            >
              <img src={d.icon} alt={d.title} loading="lazy" />
              <p className="text-xl font-bold">{d.title}</p>
              <p>{d.describe}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Howitworks;
