import React from 'react'

const tagStyle = {
    fontSize: '12px',
    fontWeight: 'var(--fw-md)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 4px',
    borderRadius: '100vh'
}

function GreenTag() {
  return (
    <div style={tagStyle} className='tags green-tag'>
        Qualified
    </div>
  )
}

function YellowTag() {
  return (
    <div style={tagStyle} className='tags yellow-tag'>
        Not Qualified
    </div>
  )
}
function PurpleTag() {
  return (
    <div style={tagStyle} className='tags purple-tag'>
        Placed
    </div>
  )
}
function BlueTag() {
  return (
    <div style={tagStyle} className='tags blue-tag'>
        Job Seeking
    </div>
  )
}
function IndigoTag() {
  return (
    <div style={tagStyle} className='tags indigo-tag'>
        Not Interested
    </div>
  )
}

export { GreenTag, YellowTag, PurpleTag, BlueTag, IndigoTag}