import './Dashboard.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import {DashboardHeader} from '../../components/Headers';
import {AdminTableTabs} from '../../components/TableTabs';
import { LearnerTable } from '../../components/UserTables';
import { LearnerAddAction } from '../../components/AddAction';
import { LearnerDataCard, 
         TrainingHeadDataCard, 
         PlacementOfficerDataCard , 
         QualifiedDataCard, 
         PlacementDataCard } from '../../components/DataCards';


function Dashboard() {
  const navigate = useNavigate()
  const serverApi = "http://localhost:8080/datastat"

  const [data, setData] = useState({});
  const [name, setName] = useState(sessionStorage.getItem("userName"))
  const [role, setRole] = useState(sessionStorage.getItem("userRole"))
  const [token, setToken] = useState(sessionStorage.getItem("userToken"))

  useEffect(() => {
    axios.get(serverApi + "?token=" + token).then((response) => {
      if(response.data.status === "Unauthorized Access") {
        navigate('/')
      }
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <DashboardHeader name={sessionStorage.getItem("userName")} role={role} />
      <div className='dashboard-body'>
        <div className='dashboard-body-header'>
          <h1>Welcome back, <span>{name === null ? '' : name.split(' ')[0]}</span></h1>
          <p>Track and manage your learners and their details</p>
        </div>
        <div className='dashboard-body-cards'>
          <LearnerDataCard data={data.learners} />
          <QualifiedDataCard data={data.qualified} />
          <PlacementDataCard data={data.placed} />
          <TrainingHeadDataCard data={data.qualified} />
          <PlacementOfficerDataCard data={data.placementofficer} />
        </div>
        <div className='dashboard-body-table'>
          {role === 'admin' && <AdminTableTabs />}
          {role === 'placement officer' && <div style={{marginTop: '1rem'}}>
              <LearnerTable />
            </div>}
          {role === 'training head' && <div style={{marginTop: '1rem'}}>
              <div className='dashboard-body-actions'>
                <button className='btn btn-import' data-icon='import-icon'>import</button>
                <LearnerAddAction />
              </div>
              <LearnerTable />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export {Dashboard}
