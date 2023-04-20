import './Dashboard.css';
import React from 'react'
import {DashboardHeader} from '../../components/Headers'
import { LearnerDataCard, TrainingHeadDataCard, PlacementOfficerDataCard, QualifiedDataCard, PlacementDataCard } from '../../components/DataCards';
import { PlacementOffcierLearnerTable } from '../../components/UserTables';


function PlacementOfficerDashboard() {
  return (
    <div>
      <DashboardHeader />
      <div className='dashboard-body'>
        <div className='dashboard-body-header'>
          <h1>Welcome back,</h1>
          <p>Track and manage your learners and their details</p>
        </div>
        <div className='dashboard-body-cards'>
          <LearnerDataCard />
          <TrainingHeadDataCard />
          <PlacementOfficerDataCard />
          <QualifiedDataCard />
          <PlacementDataCard />
        </div>
        <div className='dashboard-body-table'>
          <div style={{marginTop: '2rem'}}>
            <PlacementOffcierLearnerTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export {PlacementOfficerDashboard}
