import React from 'react'

const Logo = ({ size = 48, color = 'default' }) => {
  const filterStyle = color === 'white' 
    ? { filter: 'brightness(0) invert(1)' } 
    : {}
  
  return (
    <img 
      src="/logo.png" 
      alt="Mulug Enterprises Logo" 
      width={size} 
      height={size}
      className="flex-shrink-0"
      style={{ objectFit: 'contain', ...filterStyle }}
    />
  )
}

export default Logo
