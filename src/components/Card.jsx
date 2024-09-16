import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

const Card = (res) => {
  const {trip, image, agency} = res;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`h-72 w-96 bg-red-100 rounded-sm mb-8 ml-5 cursor-pointer transform transition-transform duration-300 ${
        isHovered ? 'translate-y-2' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="h-48 w-96 rounded-md "
        src={image}
        alt={trip}
      />
      <div className="p-1">
        <h4 className="font-semibold text-lg">{trip}</h4>
        <div className="flex text-lg gap-3">
          <h5>Ratings</h5>
          <div className="flex mt-1 text-2xl text-red-400">
            <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
          </div>
        </div>
        <h5>{agency}</h5>
      </div>
    </div>
  );
};

export default Card;
