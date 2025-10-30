import SuitabilityForm from './SuitabilityForm'
import SuitabilityResults from './SuitabilityResults'

function SuitabilityPanel({ onAnalyze, results, isAnalyzing }) {
  return (
    <div className="tool-panel__content">
      <SuitabilityForm onSubmit={onAnalyze} isAnalyzing={isAnalyzing} />
      <SuitabilityResults results={results} isLoading={isAnalyzing} />
    </div>
  )
}

export default SuitabilityPanel
