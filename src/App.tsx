import './App.css'

function App() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="card">
        <div className="logo-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            <line x1="12" y1="9" x2="12" y2="15" />
            <line x1="9" y1="12" x2="15" y2="12" />
          </svg>
        </div>

        <div className="badge">Coming Soon</div>

        <h1 className="brand">
          <span className="brand-teal">Sona</span>
          <span className="brand-dark"> Care</span>
        </h1>
        <p className="tagline">Healthcare, Reimagined</p>

        <div className="domain-pill">
          <span className="domain-dot" />
          sonacare.com
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Sona Care
      </footer>
    </div>
  )
}

export default App
