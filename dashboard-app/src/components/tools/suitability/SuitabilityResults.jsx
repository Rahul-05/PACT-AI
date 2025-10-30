import { Check, AlertTriangle, X, Loader2 } from 'lucide-react'

function SuitabilityResults({ results, isLoading }) {
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Loader2 size={24} />
      </div>
    )
  }

  if (!results || results.length === 0) {
    return null
  }

  const getIcon = (status) => {
    switch (status) {
      case 'success':
        return (
          <div className="result-card__icon result-card__icon--success">
            <Check size={12} strokeWidth={3} />
          </div>
        )
      case 'warning':
        return (
          <div className="result-card__icon result-card__icon--warning">
            <AlertTriangle size={12} strokeWidth={3} />
          </div>
        )
      case 'error':
        return (
          <div className="result-card__icon result-card__icon--error">
            <X size={12} strokeWidth={3} />
          </div>
        )
      default:
        return (
          <div className="result-card__icon result-card__icon--success">
            <Check size={12} strokeWidth={3} />
          </div>
        )
    }
  }

  return (
    <div className="results-section">
      <h3 className="results-header">Results</h3>
      <div className="results-list">
        {results.map((result, index) => (
          <div key={index} className="result-card">
            {getIcon(result.status)}
            <p className="result-card__text">{result.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuitabilityResults
