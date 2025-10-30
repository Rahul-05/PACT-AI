import { useState } from 'react'

function SuitabilityForm({ onSubmit, isAnalyzing }) {
  const [formData, setFormData] = useState({
    priorKnowledge: '',
    gradeLevel: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.priorKnowledge && formData.gradeLevel) {
      onSubmit(formData)
    }
  }

  const isFormValid = formData.priorKnowledge.trim() && formData.gradeLevel

  return (
    <form onSubmit={handleSubmit} className="suitability-form">
      <div className="form-group">
        <label className="form-label form-label--required">
          Student prior knowledge and interests
        </label>
        <input
          type="text"
          className="form-input"
          value={formData.priorKnowledge}
          onChange={(e) => setFormData({ ...formData, priorKnowledge: e.target.value })}
          placeholder="Value"
        />
      </div>

      <div className="form-group">
        <label className="form-label form-label--required">
          Grade Level
        </label>
        <select
          className="form-select"
          value={formData.gradeLevel}
          onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
          required
        >
          <option value="">Value</option>
          <option value="pre-k">Pre-K</option>
          <option value="k">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
          <option value="6">6th Grade</option>
          <option value="7">7th Grade</option>
          <option value="8">8th Grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
      </div>

      <button
        type="submit"
        className="form-button"
        disabled={!isFormValid || isAnalyzing}
      >
        {isAnalyzing ? 'Analyzing...' : 'Check for Text Suitability'}
      </button>
    </form>
  )
}

export default SuitabilityForm
