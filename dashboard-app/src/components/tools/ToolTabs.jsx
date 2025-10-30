function ToolTabs({ activeTab, onTabChange, availableTabs }) {
  const tabs = [
    { id: 'suitability', label: 'Suitability' },
    { id: 'adaption', label: 'Adaption' },
    { id: 'planning', label: 'Planning' },
  ]

  return (
    <div className="tool-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`tool-tab ${activeTab === tab.id ? 'tool-tab--active' : ''}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default ToolTabs
