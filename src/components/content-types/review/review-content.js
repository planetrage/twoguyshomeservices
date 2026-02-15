import ReactMarkdown from "react-markdown";
import ReviewBanner from "./review-banner";
import OfferCard from "./offer-card";
import OfferComparisonTable from "./offer-comparison-table";
import ContentDisclaimer from "./content-disclaimer";

function ReviewContent({ review }) {
  if (!review) return null;

  const offers = Array.isArray(review.offers) ? review.offers : [];
  const validOffers = offers.filter((o) => o && (o.name || o.headline));

  return (
    <article>
      <ReviewBanner item={review} />

      <div className="custom-container pt-[60px] pb-[60px]">
        <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
          <div className="lg:col-span-8">
            {review.content && (
              <div className="prose max-w-none mb-8">
                <ReactMarkdown>{review.content}</ReactMarkdown>
              </div>
            )}

            {validOffers.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-6">
                  {review.offersTitle || "What We Reviewed"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {validOffers.map((offer, index) => (
                    <OfferCard key={index} offer={offer} />
                  ))}
                </div>
              </section>
            )}

            {validOffers.length >= 2 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Comparison</h2>
                <OfferComparisonTable offers={validOffers} />
              </section>
            )}

            <ContentDisclaimer text={review.disclaimer} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReviewContent;
