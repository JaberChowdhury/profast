import { useInView, motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import BlurImage from "./BlurImage";

const Our_servicesv2 = () => {
  const data = [
    {
      img: "/resources/assets/live-tracking.png",
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: "/resources/assets/safe-delivery.png",
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: "/resources/assets/safe-delivery.png",
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="space-y-9">
      {data.map((d, id) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { amount: 0.2 });

        return (
          <motion.div
            key={id}
            className="flex justify-between items-center bg-white p-9 rounded-md shadow-none hover:shadow-2xl"
          >
            <div className="w-1/6">
              <BlurImage src={d.img} alt={d.title} />
            </div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: id * 0.3 }}
              className="h-60 border-l-3 border-l-slate-400 border-dashed mx-20"
            />
            <div className="w-4/5 flex justify-between space-y-9 items-center flex-col h-full">
              <p className="text-2xl font-bold w-full">{d.title}</p>
              <p className="w-full">{d.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Our_servicesv2;
