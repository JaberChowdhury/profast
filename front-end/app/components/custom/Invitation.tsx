import React from "react";
import i1 from "/resources/assets/be-a-merchant-bg.png";
import i2 from "/resources/assets/location-merchant.png";
import BlurImage from "./BlurImage";
import { Button } from "../ui/button";

const Invitation = () => {
  return (
    <div className="w-4/5 relative rounded-md mx-auto bg-[#03464D] flex justify-between items-center h-[500px] px-40 overflow-hidden">
      <img src={i1} alt="i1" className="absolute top-0" />
      <div className="w-4/5 flex justify-center items-center flex-col gap-y-7">
        <p className="font-bold text-4xl text-white w-full">
          Merchant and Customer Satisfaction is Our First Priority
        </p>
        <p className="text-white">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="w-full ">
          <div className="w-4/5 flex  space-x-9">
            <Button className="bg-[#CAEB66] text-black font-bold hover:bg-[#CAEB66]/7">
              Become a Merchant
            </Button>
            <Button variant="outline">Earn with Profast Courier</Button>
          </div>
        </div>
      </div>
      <img src={i2} alt="i2" />
    </div>
  );
};

export default Invitation;
