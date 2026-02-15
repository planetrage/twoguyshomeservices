function RatingDisplay({ rating, maxRating = 5 }) {
  if (typeof rating !== "number") return null;

  const percentage = Math.min((rating / maxRating) * 100, 100);

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold">
        {rating}
        <span className="text-base font-normal text-gray-500">
          /{maxRating}
        </span>
      </span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[200px]">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default RatingDisplay;
