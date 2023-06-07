import Star from "../components/Star";
import { useState } from "react";
function StarRating() {
  const [choosenStars, setSelectedStars] = useState(0);

  function ratingReview(rating) {
    if (rating === 0) return "Please select rating";
    if (rating === 1) return "Terrible";
    if (rating === 2) return "Bad";
    if (rating === 3) return "Awesome";
    if (rating === 4) return "Very Good";
    if (rating === 5) return "Excellent!";
  }

  return (
    <>
      <div>
        <div className="icon-div">
          {[...Array(5)].map((star, index) => (
            <Star
              className="star-icon"
              key={index}
              selected={choosenStars > index}
              onSelect={() => setSelectedStars(index + 1)}
            />
          ))}
        </div>
        <h2 className="review">{ratingReview(choosenStars)}</h2>
      </div>
    </>
  );
}
export default StarRating;
