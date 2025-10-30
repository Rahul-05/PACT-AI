import { History } from 'lucide-react'

function WelcomeHeader({ userName }) {
  const handleHistoryClick = () => {
    // TODO: Implement history panel/navigation
    console.log('History clicked')
  }

  return (
    <div className="welcome-header">
      <div className="welcome-header__content">
        <h1>
          Welcome<br />
          {userName}!
        </h1>
        <p>
          Ready to simplify your preparation? Get started with one of the<br />
          PACT + AI tools to transform your lesson materials.
        </p>
      </div>

      <button className="history-button" onClick={handleHistoryClick}>
        <History size={18} />
        <span>History</span>
      </button>
    </div>
  )
}

export default WelcomeHeader
