interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b pb-4 mb-4 flex flex-col md:flex-row md:items-start"
        >
          {/* Avatar */}
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full mr-4 mb-2 md:mb-0"
          />

          {/* Review Content */}
          <div>
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">{review.rating} stars</p>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
