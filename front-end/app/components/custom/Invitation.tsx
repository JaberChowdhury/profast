import React from "react";
import i1 from "/resources/assets/be-a-merchant-bg.png";
import i2 from "/resources/assets/location-merchant.png";
import BlurImage from "./BlurImage";
import { Button } from "../ui/button";

const Invitation = () => {
  return (
    <div className="w-4/5 relative rounded-md mx-auto">
      <BlurImage src={i1} alt="i1" className="absolute" />
      <BlurImage src={i2} alt="i2" className="absolute" />
      <p>Merchant and Customer Satisfaction is Our First Priority</p>
      <p>
        We offer the lowest delivery charge with the highest value along with
        100% safety of your product. Pathao courier delivers your parcels in
        every corner of Bangladesh right on time.
      </p>
      <Button>Become a Merchant</Button>
      <Button>Earn with Profast Courier</Button>
    </div>
  );
};

export default Invitation;
