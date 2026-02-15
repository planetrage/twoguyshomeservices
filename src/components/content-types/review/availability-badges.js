function AvailabilityBadges({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default AvailabilityBadges;
