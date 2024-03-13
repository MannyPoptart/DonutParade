import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>

        <h1>404 Error</h1>

        <p>Sorry, the page you are looking for does not exist.</p>

        <Link to="/">Go back to the homepage</Link>



    </div>
  )
}

export default ErrorPage