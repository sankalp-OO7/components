import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  LocalHospital as HospitalIcon,
  Person as SpecialistIcon,
  Assignment as CoordinatorIcon,
  Group as CommitteeMemberIcon,
  AccountCircle as ProfileIcon,
  Description as Form12Icon,
  DescriptionOutlined as Form13Icon,
  AssignmentOutlined as Form14Icon,
  Visibility as EyeBankingIcon,
  Repeat as SwapIcon,
  PeopleAlt as SwapAnalysisIcon,
  DonutLarge as TransplantIcon,
  ListAlt as MisReportsIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const SideNavbar = () => {
  const [openHospital, setOpenHospital] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openTransplants, setOpenTransplants] = useState(false);


  const handleClick = (section) => {
    switch (section) {
      case 'hospital':
        setOpenHospital(!openHospital);
        setOpenRegistration(false);
        setOpenTransplants(false);

        break;
      case 'registration':
        setOpenRegistration(!openRegistration);
        setOpenHospital(false);
        setOpenTransplants(false);

        break;
      case 'transplants':
        setOpenTransplants(!openTransplants);
        setOpenRegistration(false);
        setOpenHospital(false);


        break;
      default:
        break;
    }
  };

  return (
    <Drawer
      variant="permanent"
      onMouseLeave={()=>{setOpenHospital(false);setOpenRegistration(false);setOpenTransplants(false);
      }}
      sx={{
        width: 60,
        '&:hover': { width: 250 },
        overflowX: 'hidden',
        transition: 'width 0.3s',
        '& .MuiDrawer-paper': {
          width: 60,
          backgroundColor: '#34495e', // Dark blue background
          color: '#fff', // White text
          '&:hover': { width: 250 },
          transition: 'width 0.4s',
          cursor: 'pointer'
        },
        '& a': {
          color: '#fff', // Set default link color
          textDecoration: 'none', // Remove underline if desired
          '&:hover': {
            color: '#42b77d', // Color on hover (customize this)
          },
          '&:visited': {
            color: '#fff', // Prevent blue color for visited links
          },
          '&:active': {
            color: '#42b77d', // Custom color on click
          },
        }
      }}
    >
      <List>
        {/* Dashboard */}
        <ListItem
  button
  component={Link} // Use Link component for navigation
  to="/dashboard" // The path to redirect
  sx={{
    '&:hover': {
      backgroundColor: '#e9f0f4',
      color: '#42b77d',
    },
  }}
>
  <ListItemIcon>
    <DashboardIcon
      sx={{
        color: '#42b77d',
        '&:hover': {
          color: 'black',
        },
      }}
    />
  </ListItemIcon>
  <ListItemText primary="Dashboard" />
</ListItem>

        {/* Hospital Section */}
        <ListItem
          button
          component={Link}
          to='/Calender2'
          onMouseEnter={() => {
            setOpenHospital(!openHospital);
            setOpenRegistration(false);
            setOpenTransplants(false);
          }}   // Open on hover
          onClick={() => handleClick('hospital')}
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d',
            },
          }}
        >
          <ListItemIcon>
            <HospitalIcon sx={{ color: '#42b77d' }} />
          </ListItemIcon>
          <ListItemText primary="Hospital" />
          {openHospital ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openHospital} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <ProfileIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Hospital Profile" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <SpecialistIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Specialist" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <CoordinatorIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Transplant Coordinator" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <CommitteeMemberIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Committee Member" />
            </ListItem>
          </List>
        </Collapse>

        {/* Registration Section */}
        <ListItem
          button
          onMouseEnter={() => {
            setOpenRegistration(!openRegistration); setOpenHospital(false);
            setOpenTransplants(false);
          }}
          onClick={() => { handleClick('registration'); }}
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d'
            },
          }}
        >
          <ListItemIcon>
            <Form12Icon sx={{
              color: '#42b77d', '&:hover': {
                color: 'black'
              }
            }} />
          </ListItemIcon>
          <ListItemText primary="Registration" />
          {openRegistration ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openRegistration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <Form12Icon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Form-12 Registration" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <Form13Icon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Form-13 Registration" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <Form14Icon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Form-14 Registration" />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <EyeBankingIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="Eye Banking" />
            </ListItem>
          </List>
        </Collapse>

        {/* Transplants Section */}
        <ListItem
          button
          onMouseEnter={() => {
            setOpenTransplants(!openTransplants); setOpenRegistration(false);
            setOpenHospital(false);
          }}
          onClick={() => {
            handleClick('transplants')
          }}
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d'
            },
          }}
        >
          <ListItemIcon>
            <TransplantIcon sx={{
              color: '#42b77d', '&:hover': {
                color: 'black'
              }
            }} />
          </ListItemIcon>
          <ListItemText primary="Transplants" />
          {openTransplants ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTransplants} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{
                pl: 4,
                '&:hover': {
                  backgroundColor: '#e9f0f4',
                  color: '#42b77d',
                },
              }}
            >
              <ListItemIcon>
                <TransplantIcon sx={{
                  color: '#42b77d', '&:hover': {
                    color: 'black'
                  }
                }} />
              </ListItemIcon>
              <ListItemText primary="BSD Donor" />
            </ListItem>
          </List>
        </Collapse>

        {/* Other Items */}
        <ListItem
          button
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d'
            },
          }}
        >
          <ListItemIcon>
            <MisReportsIcon sx={{
              color: '#42b77d', '&:hover': {
                color: 'black'
              }
            }} />
          </ListItemIcon>
          <ListItemText primary="MIS Reports" />
        </ListItem>

        <ListItem
          button
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d'
            },
          }}
        >
          <ListItemIcon>
            <SwapIcon sx={{
              color: '#42b77d', '&:hover': {
                color: 'black'
              }
            }} />
          </ListItemIcon>
          <ListItemText primary="Living Organ Transplant" />
        </ListItem>

        <ListItem
          button
          sx={{
            '&:hover': {
              backgroundColor: '#e9f0f4',
              color: '#42b77d'
            },
          }}
        >
          <ListItemIcon>
            <SwapAnalysisIcon sx={{
              color: '#42b77d', '&:hover': {
                color: 'black'
              }
            }} />
          </ListItemIcon>
          <ListItemText primary="Swap Transplant Analysis" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNavbar;




































// import React, { useState } from 'react';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon,
//   LocalHospital as HospitalIcon,
//   Person as SpecialistIcon,
//   Assignment as CoordinatorIcon,
//   Group as CommitteeMemberIcon,
//   AccountCircle as ProfileIcon,
//   Description as Form12Icon,
//   DescriptionOutlined as Form13Icon,
//   AssignmentOutlined as Form14Icon,
//   Visibility as EyeBankingIcon,
//   Repeat as SwapIcon,
//   PeopleAlt as SwapAnalysisIcon,
//   DonutLarge as TransplantIcon,
//   ListAlt as MisReportsIcon,
//   ExpandLess,
//   ExpandMore,
// } from '@mui/icons-material';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   drawer: {
//     width: 60,
//     transition: 'width 0.3s',
//     overflowX: 'hidden',
//     '&:hover': {
//       width: 250,
//     },
//   },
//   drawerPaper: {
//     backgroundColor: '#0d47a1', // Dark blue background
//     color: '#fff', // White text
//     transition: 'background-color 0.3s, color 0.3s',
//   },
//   hoverItem: {
//     '&:hover': {
//       backgroundColor: '#004d40', // Hover background color (greenish tone)
//       color: '#1de9b6', // Hover text color (green)
//     },
//   },
//   nested: {
//     paddingLeft: 20,
//   },
// });

// const SideNavbar = () => {
//   const classes = useStyles();
//   const [openHospital, setOpenHospital] = useState(false);
//   const [openRegistration, setOpenRegistration] = useState(false);
//   const [openTransplants, setOpenTransplants] = useState(false);

//   const handleClick = (section) => {
//     switch (section) {
//       case 'hospital':
//         setOpenHospital(!openHospital);
//         break;
//       case 'registration':
//         setOpenRegistration(!openRegistration);
//         break;
//       case 'transplants':
//         setOpenTransplants(!openTransplants);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       className={classes.drawer}
//       classes={{
//         paper: classes.drawerPaper,
//       }}
//     >
//       <List>
//         {/* Dashboard */}
//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <DashboardIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>

//         {/* Hospital Section */}
//         <ListItem button onClick={() => handleClick('hospital')} className={classes.hoverItem}>
//           <ListItemIcon>
//             <HospitalIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Hospital" />
//           {openHospital ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openHospital} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <ProfileIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Hospital Profile" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <SpecialistIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Specialist" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <CoordinatorIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Transplant Coordinator" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <CommitteeMemberIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Committee Member" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Registration Section */}
//         <ListItem button onClick={() => handleClick('registration')} className={classes.hoverItem}>
//           <ListItemIcon>
//             <Form12Icon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Registration" />
//           {openRegistration ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openRegistration} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <Form12Icon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Form-12 Registration" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <Form13Icon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Form-13 Registration" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <Form14Icon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Form-14 Registration" />
//             </ListItem>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <EyeBankingIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="Eye Banking" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Transplants Section */}
//         <ListItem button onClick={() => handleClick('transplants')} className={classes.hoverItem}>
//           <ListItemIcon>
//             <TransplantIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Transplants" />
//           {openTransplants ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openTransplants} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={`${classes.nested} ${classes.hoverItem}`}>
//               <ListItemIcon>
//                 <TransplantIcon style={{ color: 'white' }} />
//               </ListItemIcon>
//               <ListItemText primary="BSD Donor" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Other Items */}
//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <MisReportsIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="MIS Reports" />
//         </ListItem>

//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <SwapIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Living Organ Transplant" />
//         </ListItem>

//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <SwapAnalysisIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Swap Transplant" />
//         </ListItem>

//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <SwapAnalysisIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Swap Analysis" />
//         </ListItem>

//         <ListItem button className={classes.hoverItem}>
//           <ListItemIcon>
//             <SwapAnalysisIcon style={{ color: 'white' }} />
//           </ListItemIcon>
//           <ListItemText primary="Pledged Donors" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default SideNavbar;
