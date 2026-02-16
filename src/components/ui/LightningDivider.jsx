function LightningDivider({ className = '' }) {
  return (
    <div
      className={`lightning-divider w-full ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}

export default LightningDivider;
