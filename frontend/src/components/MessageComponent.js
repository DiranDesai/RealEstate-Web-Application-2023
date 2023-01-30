import React from 'react'

function MessageComponent({message}) {
  return (
    <div className='alert alert-danger'>{message}</div>
  )
}

export default MessageComponent