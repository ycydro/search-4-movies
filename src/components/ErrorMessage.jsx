import React from 'react'

const ErrorMessage = ( {errorMessage}) => {
  return (
      <p className='text-red-500'>{errorMessage}</p>
  )
}

export default ErrorMessage
