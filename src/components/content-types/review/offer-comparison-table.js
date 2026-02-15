function OfferComparisonTable({ offers }) {
  if (!Array.isArray(offers) || offers.length === 0) return null;

  const validOffers = offers.filter((o) => o && (o.name || o.headline));
  if (validOffers.length === 0) return null;

  // Auto-detect columns from offer fields (primitives only)
  const columnSet = new Set();
  validOffers.forEach((offer) => {
    Object.entries(offer).forEach(([key, value]) => {
      if (
        value !== null &&
        value !== undefined &&
        typeof value !== "object" &&
        !Array.isArray(value) &&
        key !== "name" &&
        key !== "headline"
      ) {
        columnSet.add(key);
      }
    });
  });

  const columns = Array.from(columnSet);
  if (columns.length === 0) return null;

  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 border border-gray-200 font-bold">
              Name
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="text-left p-3 border border-gray-200 font-bold capitalize"
              >
                {col.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {validOffers.map((offer, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border border-gray-200 font-medium">
                {offer.name || offer.headline}
              </td>
              {columns.map((col) => (
                <td key={col} className="p-3 border border-gray-200">
                  {offer[col] !== null && offer[col] !== undefined
                    ? String(offer[col])
                    : "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OfferComparisonTable;
