function FeatureCard({ icon: Icon, title, description, shade, isSelected, onClick }) {
  return (
    <div
      className={`feature-card feature-card--${shade} ${isSelected ? 'feature-card--selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="feature-card__header">
        <Icon size={28} className="feature-card__icon" />
        <h3 className="feature-card__title">{title}</h3>
      </div>

      <p className="feature-card__description">{description}</p>
    </div>
  )
}

export default FeatureCard
