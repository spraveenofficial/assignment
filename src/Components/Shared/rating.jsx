import "./style.css";
export default function Rating(props) {
  const [rating, setRating] = props.rating;
  const [hover, setHover] = props.hover;
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
