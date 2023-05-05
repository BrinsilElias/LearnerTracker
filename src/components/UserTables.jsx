import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GreenTag, YellowTag, BlueTag, PurpleTag, IndigoTag } from './StatusTags';
import DeleteAction from './DeleteAction';
import {LearnerEditAction, 
        FacultyEditAction, 
        TrainingHeadEditAction, 
        PlacementOfficerEditAction} from './EditAction';

const nameColumnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F9FAFB',
    color: 'var(--clr-text-dark)',
    padding: '0.625rem 1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '0.625rem 1rem',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function checkCourseStatus(status) {
  if(status.toLowerCase() === 'qualified'){
    return <GreenTag />
  }
  return <YellowTag />
}

function checkPlacementStatus(status) {
  if(status.toLowerCase() === 'placed'){
    return <PurpleTag />
  }
  
  if(status.toLowerCase() === 'job seeking'){
    return <BlueTag />
  }
  return <IndigoTag />
}

function LearnerTable() {
  const serverApi = "http://localhost:8080/learnersdata"
  const [data, setData] = useState([])
  const [role, setRole] = useState(sessionStorage.getItem("userRole"))

  useEffect(() =>{
    axios.get(serverApi).then(
        (response) =>{
            setData(response.data)
        }
      )
    },[]
  )

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Sl.no</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Course Name</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell>Batch</StyledTableCell>
            <StyledTableCell>Course Status</StyledTableCell>
            <StyledTableCell>Placement Status</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <input type="checkbox" className="check-box"></input>
              </StyledTableCell>
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                      { bgcolor: '#F9F5FF',
                        color: '#7F56D9',
                        fontSize: '14px',
                        fontWeight: '500' }
                }>
                  {row.name.split(' ')[0][0] + row.name.split(' ')[1][0]}
                </Avatar>
                <div>{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course.toUpperCase()}</StyledTableCell>
              <StyledTableCell>{row.project.toUpperCase()}</StyledTableCell>
              <StyledTableCell>{row.batch.charAt(0).toUpperCase() + row.batch.slice(1)}</StyledTableCell>
              <StyledTableCell>{checkCourseStatus(row.status)}</StyledTableCell>
              <StyledTableCell>{checkPlacementStatus(row.placement)}</StyledTableCell>
              <StyledTableCell align='right'>
                {role === 'admin' && <DeleteAction data={row} />}
                {role === 'admin' && <LearnerEditAction data={row} />}
                {role === 'training head' && <TrainingHeadEditAction data={row} />}
                {role === 'placement officer' && <PlacementOfficerEditAction data={row} />}
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TrainingHeadTable() {
  const serverApi = "http://localhost:8080/thusersdata"
  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get(serverApi).then(
        (response) =>{
            setData(response.data)
        }
      )
    },[]
  )
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Sl.no</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <input type="checkbox" className="check-box"></input>
              </StyledTableCell>
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                        { bgcolor: '#F9F5FF',
                          color: '#7F56D9',
                          fontSize: '14px',
                          fontWeight: '500' }
                }>
                  {row.name.split(' ')[0][0] + row.name.split(' ')[1][0]}
                </Avatar>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.password}</StyledTableCell>
              <StyledTableCell>{row.course.toUpperCase()}</StyledTableCell>
              <StyledTableCell>{row.project.toUpperCase()}</StyledTableCell>
              <StyledTableCell align='right'>
                <DeleteAction data={row} route={row.id} />
                <FacultyEditAction route={row.id} data={row} />               
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function PlacementOfficerTable() {
  const serverApi = "http://localhost:8080/pousersdata"
  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get(serverApi).then(
        (response) =>{
            setData(response.data)
        }
      )
    },[]
  )
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Sl.no</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <input type="checkbox" className="check-box"></input>
              </StyledTableCell>
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                        { bgcolor: '#F9F5FF',
                          color: '#7F56D9',
                          fontSize: '14px',
                          fontWeight: '500' }
                  }>
                  {row.name.split(' ')[0][0] + row.name.split(' ')[1][0]}
                </Avatar>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.password}</StyledTableCell>
              <StyledTableCell>{row.course.toUpperCase()}</StyledTableCell>
              <StyledTableCell>{row.project.toUpperCase()}</StyledTableCell>
              <StyledTableCell align='right'>
                <DeleteAction data={row} route={row.id} />
                <FacultyEditAction route={row.id} data={row} />                
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export {
        LearnerTable, 
        TrainingHeadTable, 
        PlacementOfficerTable, 
      }