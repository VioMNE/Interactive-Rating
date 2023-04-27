import React, { useState } from "react";

const RatingComponent = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="rating-component">
      {submitted ? (
        <div className="thank-you">
          <img  src="/icon/illustration-thank-you.svg" alt="thankyou" />
          <p className="selected-rating"> You selected {rating} out of 5  </p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
          <div>
            <div className="text-box">
              <img className="star" src="/icon/icon-star.svg" alt="star"/>
            <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciared to help us imporove our offering!
          </p>
            </div>
          
          <div className="rating-options">
            {[1, 2, 3, 4, 5].map((value) => (
              <div
                key={value}
                className={`rating-option ${
                  rating === value ? "selected" : ""
                }`}
                onClick={() => handleRatingChange(value)}
              >
                {value}
              </div>
            ))}
          </div>
          <button
            className="submit-button"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
