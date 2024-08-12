import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = ({ bikeId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/reviews?bikeId=${bikeId}`)
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [bikeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reviewData = {
      bikeId,
      text: newReview,
      rating,
      date: new Date().toISOString()
    };

    axios.post('http://localhost:3000/reviews', reviewData)
      .then(response => {
        setReviews([...reviews, response.data]);
        setNewReview('');
        setRating(0);
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error('Error submitting review:', error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="reviews-section">
      <h3>Customer Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p><strong>Rating:</strong> {review.rating} / 5</p>
            <p>{review.text}</p>
            <p><small>{new Date(review.date).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <h4>Leave a Review</h4>
        <div>
          <label>Rating: </label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} required>
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default Reviews;

