import './Dashboard.css';
import React from 'react'
import {DashboardHeader} from '../../components/Headers'
import {AdminTableTabs} from '../../components/TableTabs';
import { LearnerDataCard, 
         TrainingHeadDataCard, 
         PlacementOfficerDataCard , 
         QualifiedDataCard, 
         PlacementDataCard } from '../../components/DataCards';


function AdminDashboard() {
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
          <AdminTableTabs />
        </div>
      </div>
    </div>
  )
}

export {AdminDashboard}
