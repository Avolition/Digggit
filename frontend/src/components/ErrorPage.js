// import package deps
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => (
  <div className="app">
    <main>
      <section className="main">
        <div className="error">
          <h1>404 Error</h1>
          <h1>I literally have no idea where you am!</h1>
          <Link to={`/all`}><button>Click to save yourself</button></Link>
        </div>
      </section>
    </main>
  </div>
)

export default ErrorPage