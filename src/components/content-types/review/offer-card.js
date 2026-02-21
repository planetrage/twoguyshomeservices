import RatingDisplay from "./rating-display";
import AvailabilityBadges from "./availability-badges";

function OfferCard({ offer }) {
  if (!offer || (!offer.name && !offer.headline)) return null;

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{offer.name || offer.headline}</h3>
        {offer.name && offer.headline && (
          <p className="text-gray-600 mt-1">{offer.headline}</p>
        )}
      </div>

      {offer.details && (
        <p className="text-secondary leading-[27px] mb-4">{offer.details}</p>
      )}

      {typeof offer.rating === "number" && (
        <div className="mb-4">
          <RatingDisplay rating={offer.rating} />
        </div>
      )}

      {offer.metadata &&
        typeof offer.metadata === "object" &&
        Object.keys(offer.metadata).length > 0 && (
          <dl className="grid grid-cols-2 gap-2 text-sm mb-4">
            {Object.entries(offer.metadata).map(([key, value]) => {
              if (
                value === null ||
                value === undefined ||
                typeof value === "object"
              )
                return null;
              return (
                <div key={key}>
                  <dt className="text-gray-500 capitalize">
                    {key.replace(/_/g, " ")}
                  </dt>
                  <dd className="font-medium">{String(value)}</dd>
                </div>
              );
            })}
          </dl>
        )}

      <AvailabilityBadges items={offer.badges} />

      {offer.link && (
        <a
          href={offer.link}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded font-semibold hover:opacity-90 transition-opacity"
        >
          {offer.ctaText || "Learn More"}
        </a>
      )}
    </div>
  );
}

export default OfferCard;
