import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleNotify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      {/* Animated background */}
      <div className="bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Card */}
      <div className="card">
        {/* Logo icon */}
        <div className="logo-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            <line x1="12" y1="9" x2="12" y2="15" />
            <line x1="9" y1="12" x2="15" y2="12" />
          </svg>
        </div>

        {/* Badge */}
        <div className="badge">Coming Soon</div>

        {/* Brand */}
        <h1 className="brand">
          <span className="brand-teal">Sona</span>
          <span className="brand-dark"> Care</span>
        </h1>
        <p className="tagline">Healthcare, Reimagined</p>

        <div className="divider" />

        {/* Description */}
        <p className="body-text">
          We're building something meaningful — a platform dedicated to making
          quality healthcare more accessible, personal, and compassionate.
          Stay tuned, great things are on the way.
        </p>

        {/* Feature pills */}
        <div className="pills">
          <span className="pill">
            <svg viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Patient-First Care
          </span>
          <span className="pill">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            24/7 Support
          </span>
          <span className="pill">
            <svg viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Trusted & Secure
          </span>
        </div>

        {/* Notify form */}
        <div className="cta-group">
          <p className="cta-label">Get notified when we launch</p>
          <form className="email-form" onSubmit={handleNotify}>
            <input
              type="email"
              className="email-input"
              placeholder="your@email.com"
              required
              disabled={submitted}
              aria-label="Email address"
            />
            <button
              type="submit"
              className={`notify-btn${submitted ? ' success' : ''}`}
              disabled={submitted}
            >
              {submitted ? "You're on the list!" : 'Notify Me'}
            </button>
          </form>
        </div>

        {/* Domain status */}
        <div className="domain-pill">
          <span className="domain-dot" />
          sonacare.com — domain secured
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Sona Care. All rights reserved.
        <br />
        Built with care, for care.
      </footer>
    </div>
  )
}

export default App
