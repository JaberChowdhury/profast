import { useEffect, useState } from "react";

type Review = {
  id: string;
  user_email: string;
  userName: string;
  delivery_email: string;
  ratings: number;
  review: string;
  parcel_id: string;
  pick_up_email: string;
  user_photoURL: string;
  date: string;
};

const CustomerReview = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/JaberChowdhury/profast/master/front-end/app/src/data/reviews.json"
    )
      .then((res) => res.json())
      .then((data: Review[]) => {
        setReviews(data);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
      });
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col gap-y-6 mb-10">
        <img src="/resources/assets/customer-top.png" alt="Customer Review" />
        <h2 className="font-bold text-5xl">What our customers are saying</h2>
        <p className="text-center text-slate-500 max-w-2xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.user_photoURL}
                alt={review.userName}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h4 className="font-bold">{review.userName}</h4>
                <p className="text-sm text-slate-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-slate-700 mb-4">{review.review}</p>
            <p className="text-yellow-500 font-semibold">
              Rating: {review.ratings} ⭐
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
