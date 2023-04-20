import React from 'react'

const cardStyle = {
    display: 'grid',
    gap: '2rem',
    padding: '1rem',
    minWidth: '220px',
    borderRadius: '0.5rem',
    border: '1px solid #EAECF0',
}

function LearnerDataCard() {
  return (
    <div style={cardStyle}>
        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} className='card-header'>
            <div className='user-icon'></div>          
            <p className="medium-text">Learners</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='card-body'>
            <div className='number'>
                240
            </div>
        </div>
    </div>
  )
}

function TrainingHeadDataCard() {
    return (
      <div style={cardStyle}>
          <div className='card-header'>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} className='card-header'>
              <div className='users-icon'></div>          
              <p className="medium-text">Training Head</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='card-body'>
              <div className='number'>30</div>
          </div>
      </div>
    )
}

function PlacementOfficerDataCard() {
    return (
      <div style={cardStyle}>
          <div className='card-header'>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} className='card-header'>
              <div className='users-icon'></div>          
              <p className="medium-text">Placement Officer</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='card-body'>
              <div className='number'>24</div>
          </div>
      </div>
    )
}

function QualifiedDataCard() {
    return (
      <div style={cardStyle}>
          <div className='card-header'>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} className='card-header'>
                <div className='chart1-icon'></div>          
                <p className="medium-text">Qualified</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='card-body'>
              <div className='number'>208</div>
          </div>
      </div>
    )
}

function PlacementDataCard() {
    return (
      <div style={cardStyle}>
          <div className='card-header'>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} className='card-header'>
                <div className='chart2-icon'></div>          
                <p className="medium-text">Placed</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='card-body'>
              <div className='number'>89</div>
          </div>
      </div>
    )
}

export { LearnerDataCard, TrainingHeadDataCard, PlacementOfficerDataCard, QualifiedDataCard, PlacementDataCard }