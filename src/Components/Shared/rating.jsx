import { useEffect } from "react";
import "./style.css";
export default function Rating(props) {
  const [rating, setRating, isThisAvailable] = props.rating;
  const [hover, setHover] = props.hover;
  console.log(isThisAvailable);
  useEffect(() => {
    if (isThisAvailable !== undefined) {
      setRating(isThisAvailable.answer);
    }
  }, [isThisAvailable]);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              "rating " + `${index <= (hover || rating) ? "on" : "off"}`
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
