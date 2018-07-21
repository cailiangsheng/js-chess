import React from 'react'
import './style.less'

const ChessTattoo = () => {
  return <div className='chess-tattoo'>
    <div className='corner top left' />
    <div className='corner top right' />
    <div className='corner bottom left' />
    <div className='corner bottom right' />
  </div>
}

export default ChessTattoo
