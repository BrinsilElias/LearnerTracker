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
import { GreenTag, YellowTag, BlueTag, PurpleTag, IndigoTag, GreyTag } from './StatusTags';
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
  if(status && status.toLowerCase() === 'qualified'){
    return <GreenTag />
  }else if(status && status.toLowerCase() === 'not qualified'){
    return <YellowTag />
  }
  return <GreyTag />
}

function checkPlacementStatus(status) {
  if(status && status.toLowerCase() === 'placed'){
    return <PurpleTag />
  }else if(status && status.toLowerCase() === 'job seeking'){
    return <BlueTag />
  }else if(status && status.toLowerCase() === 'not interested'){
    return <IndigoTag />
  }
  return <GreyTag />
}

function LearnerTable() {
  const serverApi = "http://localhost:8080/api/learnersdata"
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
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                      { bgcolor: '#F9F5FF',
                        color: '#7F56D9',
                        fontSize: '14px',
                        fontWeight: '500' }
                }>
                  {
                    row.name ? 
                      row.name.includes(' ')
                      ? row.name.split(' ')[0][0] + row.name.split(' ')[1][0] : row.name.split(' ')[0][0]
                    : 'AV'
                  }
                </Avatar>
                <div>{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course ? row.course.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.project ? row.project.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.batch ? row.batch.charAt(0).toUpperCase() + row.batch.slice(1) : ''}</StyledTableCell>
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
  const serverApi = "http://localhost:8080/api/thusersdata"
  const [data, setData] = useState([])
  const [visiblePasswordRows, setVisiblePasswordRows] = useState([]);

  const togglePasswordVisibility = (rowId) => {
    if (visiblePasswordRows.includes(rowId)) {
      setVisiblePasswordRows(visiblePasswordRows.filter(id => id !== rowId));
    } else {
      setVisiblePasswordRows([...visiblePasswordRows, rowId]);
    }
  }

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
            <StyledTableCell>Sl.no</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                        { bgcolor: '#F9F5FF',
                          color: '#7F56D9',
                          fontSize: '14px',
                          fontWeight: '500' }
                }>
                  {
                    row.name ? 
                      row.name.includes(' ')
                      ? row.name.split(' ')[0][0] + row.name.split(' ')[1][0] : row.name.split(' ')[0][0]
                    : 'AV'
                  }
                </Avatar>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course ? row.course.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.project ? row.project.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>
                  {
                    visiblePasswordRows.includes(row._id) ? 
                    <span>{row.password}</span> : 
                    <span>*********</span>
                  }
              </StyledTableCell>
              <StyledTableCell align='right'>
                <button 
                    className='btn btn-show' 
                    data-icon="show-icon"
                    onMouseDown={() => togglePasswordVisibility(row._id)}
                    onMouseUp={() => togglePasswordVisibility(row._id)}
                    onMouseLeave={() => setVisiblePasswordRows(visiblePasswordRows.filter(id => id !== row._id))}
                >
                </button>
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
  const serverApi = "http://localhost:8080/api/pousersdata"
  const [data, setData] = useState([])
  const [visiblePasswordRows, setVisiblePasswordRows] = useState([]);

  const togglePasswordVisibility = (rowId) => {
    if (visiblePasswordRows.includes(rowId)) {
      setVisiblePasswordRows(visiblePasswordRows.filter(id => id !== rowId));
    } else {
      setVisiblePasswordRows([...visiblePasswordRows, rowId]);
    }
  }

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
            <StyledTableCell>Sl.no</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Project</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell style={{fontWeight: 'var(--fw-md)'}}>{index + 1}</StyledTableCell> 
              <StyledTableCell style={nameColumnStyle}>
                <Avatar sx={
                        { bgcolor: '#F9F5FF',
                          color: '#7F56D9',
                          fontSize: '14px',
                          fontWeight: '500' }
                  }>
                  {
                    row.name ? 
                      row.name.includes(' ')
                      ? row.name.split(' ')[0][0] + row.name.split(' ')[1][0] : row.name.split(' ')[0][0]
                    : 'AV'
                  }
                </Avatar>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course ? row.course.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.course ? row.project.toUpperCase() : ''}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>
                  {
                    visiblePasswordRows.includes(row._id) ? 
                    <span>{row.password}</span> : 
                    <span>*********</span>
                  }
              </StyledTableCell>
              <StyledTableCell align='right'>
                <button 
                    className='btn btn-show' 
                    data-icon="show-icon"
                    onMouseDown={() => togglePasswordVisibility(row._id)}
                    onMouseUp={() => togglePasswordVisibility(row._id)}
                    onMouseLeave={() => setVisiblePasswordRows(visiblePasswordRows.filter(id => id !== row._id))}
                >
                </button>
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