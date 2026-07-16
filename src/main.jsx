import React from 'react'
import ReactDOM from 'react-dom/client'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, color: '#1f2937', background: '#f8fafc', minHeight: '100vh' }}>
        <h1 style={{ margin: '0 0 12px', fontSize: 22 }}>Errore di avvio</h1>
        <p style={{ margin: '0 0 12px', lineHeight: 1.5 }}>
          L&apos;app ha generato un errore durante il rendering iniziale.
        </p>
        <pre style={{ margin: 0, padding: 16, borderRadius: 12, background: '#ffffff', border: '1px solid #cbd5e1', whiteSpace: 'pre-wrap' }}>
          {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
        </pre>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

function renderStartupError(error) {
  root.render(
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, color: '#1f2937', background: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ margin: '0 0 12px', fontSize: 22 }}>Errore di avvio</h1>
      <p style={{ margin: '0 0 12px', lineHeight: 1.5 }}>
        L&apos;app non riesce a caricarsi correttamente.
      </p>
      <pre style={{ margin: 0, padding: 16, borderRadius: 12, background: '#ffffff', border: '1px solid #cbd5e1', whiteSpace: 'pre-wrap' }}>
        {String(error?.stack || error?.message || error)}
      </pre>
    </div>,
  )
}

import('./App')
  .then(({ default: App }) => {
    root.render(
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>,
    )
  })
  .catch((error) => {
    renderStartupError(error)
  })
