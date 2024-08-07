import React from "react";
import {reviews} from '../../constants/enums'
import "./Review.css";

function Review() {
  return (
    <section>
      <h2>What Customers Are Saying</h2>
      <div className="review-container">
        {reviews.map(({ title, text, author }, i) => (
          <div key={i} className="review">
            <h3>{title}</h3>
            <p>{text}</p>
            <h4>~ {author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
