import './Dashboard.css';
import React from 'react'
import {DashboardHeader} from '../../components/Headers'
import { LearnerDataCard, TrainingHeadDataCard, PlacementOfficerDataCard , QualifiedDataCard, PlacementDataCard } from '../../components/DataCards';
import { LearnerAddAction } from '../../components/AddAction';
import { TrainingHeadLearnerTable } from '../../components/UserTables';


function TrainingHeadDashboard() {
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
          <div style={{marginTop: '1rem'}}>
            <div className='dashboard-body-actions'>
              <button className='btn btn-import' data-icon='import-icon'>import</button>
              <LearnerAddAction />
            </div>
            <TrainingHeadLearnerTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export {TrainingHeadDashboard}
