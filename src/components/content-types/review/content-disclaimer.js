const DEFAULT_DISCLAIMER =
  "This content is for informational purposes only. Offerings, availability, and details may change. Always verify directly with the provider.";

function ContentDisclaimer({ text }) {
  const disclaimerText = text || DEFAULT_DISCLAIMER;

  return (
    <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <p className="text-sm text-gray-500 leading-relaxed">{disclaimerText}</p>
    </div>
  );
}

export default ContentDisclaimer;
