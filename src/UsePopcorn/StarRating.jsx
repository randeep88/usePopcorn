import React, { useState } from "react";
import FullStarSVG from "./StarSVG";

const StarRating = ({ maxRating = 10, handleExRating }) => {
  const [rating, setRating] = useState();
  const [tempRating, setTempRating] = useState();

  const handleRating = (rating) => {
    setRating(rating);
    handleExRating(rating)
  };

  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: maxRating }, (_, i) => {
        return (
          <FullStarSVG
            onRate={() => handleRating(i + 1)}
            full={tempRating? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={()=>setTempRating(i + 1)}
            onHoverOut={()=>setTempRating(0)}
          />
        );
      })}
      <div className="ms-3">
        <p className="font-bold text-gray-300">{tempRating || rating || ""}</p>
      </div>
    </div>
  );
};

export default StarRating;
