import { Paperclip, Send } from 'lucide-react'
import { useState } from 'react'

function AIInputBox({ selectedTool, onSend }) {
  const [inputValue, setInputValue] = useState('')

  const handleAttachment = () => {
    // TODO: Implement file attachment
    console.log('Attachment clicked')
  }

  const handleSend = () => {
    if (inputValue.trim() && selectedTool) {
      onSend(inputValue, selectedTool)
      setInputValue('')
    } else if (!selectedTool) {
      alert('Please select a tool card first')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="ai-input-container">
      <textarea
        className="ai-input-textarea"
        placeholder="Ask Pact + AI!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="ai-input-actions">
        <button
          className="ai-input-icon-button"
          onClick={handleAttachment}
          aria-label="Attach file"
        >
          <Paperclip size={18} />
        </button>

        <button
          className="ai-input-icon-button"
          onClick={handleSend}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default AIInputBox
