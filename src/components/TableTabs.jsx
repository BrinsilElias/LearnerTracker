import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { LearnerImportAction, UserImportAction } from './ImportAction';
import { LearnerAddAction, ThAddAction, PoAddAction } from './AddAction';
import { LearnerTable, 
         TrainingHeadTable, 
         PlacementOfficerTable, } from './UserTables';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{paddingBlock: '1rem'}}>
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AdminTableTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: '#D2D7DF' }}>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                TabIndicatorProps={{sx: {backgroundColor: '#7e55d8'}}}
                sx={{
                    '& button': {textTransform: 'capitalize' },
                    '& button.Mui-selected': {color: '#7e55d8'}
                }}
            >
                <Tab label="Learner" {...a11yProps(0)} />
                <Tab label="Training Head" {...a11yProps(1)} />
                <Tab label="Placement Officer" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div className='dashboard-body-actions'>
              <LearnerImportAction />
              <LearnerAddAction />
            </div>
            <LearnerTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className='dashboard-body-actions'>
              <UserImportAction />
              <ThAddAction />
            </div>
            <TrainingHeadTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div className='dashboard-body-actions'>
              <UserImportAction />
              <PoAddAction />
            </div>
            <PlacementOfficerTable />
        </TabPanel>
    </Box>

  );
}


export { AdminTableTabs }