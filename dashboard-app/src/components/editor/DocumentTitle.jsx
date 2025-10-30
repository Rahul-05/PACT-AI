import { useState } from 'react'

function DocumentTitle({ title, onChange }) {
  const [localTitle, setLocalTitle] = useState(title)

  const handleBlur = () => {
    onChange(localTitle)
  }

  return (
    <input
      type="text"
      className="document-title"
      value={localTitle}
      onChange={(e) => setLocalTitle(e.target.value)}
      onBlur={handleBlur}
      placeholder="Untitled Document"
    />
  )
}

export default DocumentTitle
