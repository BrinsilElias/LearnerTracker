import * as React from 'react';
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

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: '#F9F5FF',
      color: '#7F56D9',
      fontSize: '14px',
      fontWeight: '500'
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

// ----------------- Dummy Data Creation -----------------------
function createData(id, name, username, course ,project, batch, status, placement) {
  return { id, name, username, course, project, batch, status, placement };
}

const rows = [
  createData('LR001', 'Brinsil Elias', 'brinsilelias01', 'FSD', 'ICTAK', 'May 2022' ,'Qualified', 'Placed'),
  createData('LR002', 'Aravind Suresh', 'aravindsuresh09', 'DSA', 'KKEM', 'Jun 2022' ,'Qualified', 'Job Seeking'),
  createData('LR003', 'Hari Shankar', 'harishankar07', 'ML-AI', 'NORKA', 'Aug 2022' ,'Qualified', 'Job Seeking'),
  createData('LR004', 'Joydeep Raina', 'joydeepraina10', 'RPA', 'KDISC', 'Aug 2022' ,'Qualified', 'Job Seeking'),
  createData('LR005', 'Rahul Govind', 'rahulgovind56', 'ST', 'KDISC', 'Dec 2022' ,'Not Qualified', 'Job Seeking'),
  createData('LR006', 'Abhiram Vijayram', 'abhivijay98', 'CSA', 'NORKA', 'Dec 2022' ,'Not Qualified', 'Placed'),
  createData('LR007', 'Joel Chacko', 'joelchacko97', 'FSD', 'ICTAK', 'Dec 2022' ,'Qualified', 'Job Seeking'),
  createData('LR008', 'Agustine Jose', 'agunstinejose05', 'DSA', 'ICTAK', 'Mar 2022' ,'Qualified', 'Not Interested'),
  createData('LR009', 'Serene Mathew', 'serenemathew04', 'ML-AI', 'KKEM', 'Mar 2022' ,'Qualified', 'Not Interested'),
  createData('LR010', 'Sridhav M', 'msridhav01', 'RPA', 'KKEM', 'Mar 2022', 'Not Qualified', 'Placed'),
];

function createData1(id, name, username, email, password, course, project){
  return {id, name, username, email, password, course, project}
}

const rows1 = [
  createData1('TH001', 'Justin George', 'justingeorge01', 'justingeorge01@gmail.com', 'Justin#123', 'FSD', 'ICTAK'),
  createData1('TH002', 'Jenny Marcus', 'jennymarcus77', 'jennymarcus77@gmail.com', 'Jenny#123', 'DSA', 'ICTAK'),
  createData1('TH003', 'Samuel Joseph', 'samueljoseph10', 'samueljoseph10@gmail.com', 'Samuel#123', 'ML-AI', 'KKEM'),
  createData1('TH004', 'Riya Sharma', 'riyasharma17', 'riyasharma17@gmail.com', 'Riya#123', 'RPA', 'NORKA'),
  createData1('TH005', 'Shruthi Ramesh', 'shruthuramesh09', 'shruthuramesh09@gmail.com', 'Shruthi#123', 'ST', 'KDISC'),
  createData1('TH006', 'Sila Mary', 'silamary01', 'silamary01@gmail.com', 'Sila#123', 'CSA', 'KDISC'),
];

function createData2(id, name, username, email, password, course, project){
  return {id, name, username, email, password, course, project}
}

const rows2 = [
  createData2('PO001', 'Siddharth Pandey', 'sdipandey01', 'sidpandey01@gmail.com', 'Sid#123', 'FSD', 'ICTAK'),
  createData2('PO002', 'Gasni Mohammad', 'gasnimd99', 'gasnimd99@gmail.com', 'Gasni#123', 'DSA', 'ICTAK'),
  createData2('PO003', 'Abhishek Subash', 'abhisubash87', 'abhisubash87@gmail.com', 'Abhi#123', 'ML-AI', 'KKEM'),
  createData2('PO004', 'Akshaya Suresh', 'akshayasu78', 'akshayasu78@gmail.com', 'Akshaya#123', 'RPA', 'NORKA'),
  createData2('PO005', 'Darshana Tanti', 'darshanatanti99', 'darshanatanti99@gmail.com', 'Darshana#123', 'ST', 'KDISC'),
  createData2('PO006', 'Sparsha Shyam', 'sparsha03', 'sparsha03@gmail.com', 'Sparsha#123', 'CSA', 'KDISC'),
];
// ----------------- Dummy Data Creation -----------------------

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

function AdminLearnerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Learner Id</StyledTableCell>
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
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{fontWeight: '500'}} component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell style={nameColumnStyle}>
                <Avatar {...stringAvatar(row.name)} />
                <div>{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.project}</StyledTableCell>
              <StyledTableCell>{row.batch}</StyledTableCell>
              <StyledTableCell>{checkCourseStatus(row.status)}</StyledTableCell>
              <StyledTableCell>{checkPlacementStatus(row.placement)}</StyledTableCell>
              <StyledTableCell align='right'>
                <DeleteAction route={row.id} />
                <LearnerEditAction route={row.id} data={row} />
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TrainingHeadTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
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
          {rows1.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{fontWeight: '500'}} component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell style={nameColumnStyle}><Avatar {...stringAvatar(row.name)} />{row.name}</StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.password}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.project}</StyledTableCell>
              <StyledTableCell align='right'>
                <DeleteAction route={row.id} />
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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
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
          {rows2.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{fontWeight: '500'}} component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell style={nameColumnStyle}><Avatar {...stringAvatar(row.name)} />{row.name}</StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.password}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.project}</StyledTableCell>
              <StyledTableCell align='right'>
                <DeleteAction route={row.id} />
                <FacultyEditAction route={row.id} data={row} />                
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TrainingHeadLearnerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Learner Id</StyledTableCell>
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
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{fontWeight: '500'}} component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell style={nameColumnStyle}>
                <Avatar {...stringAvatar(row.name)} />
                <div>{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.project}</StyledTableCell>
              <StyledTableCell>{row.batch}</StyledTableCell>
              <StyledTableCell>{checkCourseStatus(row.status)}</StyledTableCell>
              <StyledTableCell>{checkPlacementStatus(row.placement)}</StyledTableCell>
              <StyledTableCell align='right'>                
                <TrainingHeadEditAction route={row.id} data={row} />
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function PlacementOffcierLearnerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Learner Id</StyledTableCell>
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
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{fontWeight: '500'}} component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell style={nameColumnStyle}>
                <Avatar {...stringAvatar(row.name)} />
                <div>{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>@{row.username}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.project}</StyledTableCell>
              <StyledTableCell>{row.batch}</StyledTableCell>
              <StyledTableCell>{checkCourseStatus(row.status)}</StyledTableCell>
              <StyledTableCell>{checkPlacementStatus(row.placement)}</StyledTableCell>
              <StyledTableCell align='right'>
                <PlacementOfficerEditAction route={row.id} data={row} />
              </StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {
        AdminLearnerTable, 
        TrainingHeadTable, 
        PlacementOfficerTable, 
        TrainingHeadLearnerTable, 
        PlacementOffcierLearnerTable
      }