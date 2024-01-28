import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='err'>
      <div className="errpage">
      <h1>404</h1>
      <p>page not found</p>
      <Link to='/' className='linkerr'>Back</Link>
      </div>
    </div>
  )
}

export default Error;