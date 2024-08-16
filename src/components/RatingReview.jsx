import React, { useEffect, useState } from 'react';

function RatingReview({ bikeId, userId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch the rating for the specific bike from the db.json server
    const fetchRating = async () => {
      try {
        const response = await fetch(`https://json-server-vercel-lemon-nu.vercel.app/ratings?user=${userId}&bikeId=${bikeId}`);
        const data = await response.json();

        if (data.length > 0) {
          setRating(data[0].rating);
          localStorage.setItem(`userRating_${bikeId}`, JSON.stringify(data[0])); // Optionally store in localStorage
        }
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchRating();
  }, [userId, bikeId]);

  const handleRating = async (star) => {
    setRating(star);

    const updatedRating = {
      user: userId,
      bikeId: bikeId,
      rating: star,
    };

    // Update the rating for the specific bike in the db.json server
    try {
      const response = await fetch(`https://json-server-vercel-lemon-nu.vercel.app/ratings?user=${userId}&bikeId=${bikeId}`);
      const data = await response.json();

      if (data.length > 0) {
        // Update existing rating
        await fetch(`https://json-server-vercel-lemon-nu.vercel.app/ratings/${data[0].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRating),
        });
      } else {
        // Create a new rating entry
        await fetch(`https://json-server-vercel-lemon-nu.vercel.app/ratings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRating),
        });
      }

      // Optionally update localStorage
      localStorage.setItem(`userRating_${bikeId}`, JSON.stringify(updatedRating));
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className='star'
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '35px',
          }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingReview;
