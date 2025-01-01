import { useState } from "react";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleLeave() {
    setHover(rating);
  }

  return (
    <div className="flex justify-center bg-black">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating)
                ? "text-yellow-300"
                : "text-slate-400"
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
            size={40}
          />
          
        );
      })}
    </div>
  );
};

export default StarRating; 
