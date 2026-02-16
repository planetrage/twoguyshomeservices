import RatingDisplay from "./rating-display";

function ReviewBanner({ item }) {
  if (!item) return null;

  const title = item.h1 || item.title || "";
  const imagePath = item.image || "";

  return (
    <div className="relative mt-[60px] md:mt-[100px]" style={{ background: 'var(--olympus-navy)' }}>
      {imagePath && (
        <div className="absolute inset-0 z-0">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      )}
      <div className="relative z-10 custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-24">
        <h1 className="text-[28px] md:text-[52px] text-white font-bold text-left leading-snug mb-4">
          {title}
        </h1>
        {item.date && (
          <p className="text-gray-300 text-sm mb-4">{item.date}</p>
        )}
        {typeof item.rating === "number" && (
          <div className="text-white">
            <RatingDisplay rating={item.rating} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewBanner;
