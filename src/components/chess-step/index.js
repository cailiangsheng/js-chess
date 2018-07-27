import React from 'react'
import './style.less'

const ChessStep = () => {
  return <div className='chess-step'>
    <div className='corner top left' />
    <div className='corner top right' />
    <div className='corner bottom left' />
    <div className='corner bottom right' />
  </div>
}

export default ChessStep
