import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import List from '@mui/material/List';
import { Avatar, Typography, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { AssignmentIndOutlined, BarChartOutlined, CalendarTodayOutlined, GroupOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, MoveToInboxOutlined, Person2Outlined, PieChartOutlineOutlined, ReceiptOutlined, ShowChartOutlined } from '@mui/icons-material';
import v4  from "./2.png"
import { useNavigate } from 'react-router-dom';

import { grey } from '@mui/material/colors';



const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

const Array1 =[
  {title:"Dashbord" ,icon: <HomeOutlined /> ,path:"/"  },
  {title:"Mange team",icon:<GroupOutlined /> , path:"/team"},
  {title:"contact information" ,icon :<AssignmentIndOutlined/>,path:"/contact"},
  {title:"invoice balance" ,icon:<ReceiptOutlined />,path:"/invoice"}

];
const Array2 =[
  {title:"Profile Form" , icon:<Person2Outlined  />  ,path:"/Profile"},
  {title:"Calendar" , icon:<CalendarTodayOutlined  />  ,path:"/Calendar"},
  {title:"FAQ Page" , icon:<HelpOutlineOutlined />  ,path:"/FAQ"},
];
const Array3 =[
  {title:"bar chart" , icon:<BarChartOutlined  />  ,path:"/barchart"},
  {title:"pie chart" , icon:<PieChartOutlineOutlined  />  ,path:"/piechart"},
  {title:"Line chart" , icon:<ShowChartOutlined />  ,path:"/Linechart"},
  {title:"geography chart" , icon:<MapOutlined />  ,path:"/geographychart"},

]




export default function SideBar({open,handleDrawerClose}) {
  const navigate = useNavigate();
    const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />

    <Avatar 
    sx={{mx:"auto", my:1,border:"2px solid #696969", marginTop:"10px",
    height:  open ?"80px" :"44px",
     width:open ?"80px":"44px",marginBottom:"12px" ,transition:".25s"}}
    alt="Remy Sharp" src={v4} />
    <Typography align='center'   sx={{fontSize:open?"20px":"0px" ,transition:".25s",fontWeight:"bold"}} >Odai</Typography>
    <Typography align='center'  sx={{fontSize:open?"14px":"0px",marginBottom:"5px",transition:".25s" }}>Admin</Typography>

    <Divider />
    <List>
      {Array1.map((item) => (
        <ListItem key={item.title} disablePadding sx={{ display: 'block' }} >
          <ListItemButton
          onClick={()=>{navigate(item.path)}}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path 
              ? theme.palette.mode==="dark"?grey[800] :grey[300] : null
              
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />

          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {Array2.map((item) => (
        <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={()=>{
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path
              ?  theme.palette.mode === "dark" ? grey[800] : grey[300] 
              :null
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        
      ))}
    </List>
    <Divider />
    <List>
      {Array3.map((item) => (
        <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={()=>{
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path 
              ? theme.palette.mode === "dark" ? grey[800] : grey[300] :null
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        
      ))}
    </List>
  </Drawer>
  
  
 )}

