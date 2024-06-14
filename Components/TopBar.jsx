import { Box, IconButton, InputBase, styled, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import {  alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const drawerWidth = 240;


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


export default function TopBar({open,handleDrawerOpen ,setMode}) {
  const them = useTheme() 
  return (
    <AppBar position="fixed" 
    // @ts-ignore
          open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box flexGrow={1} />  {/*تاخذ كل المساحة بين العنصرين */}

          <Stack direction={"row"}>  {/* العناصر تكون افقية  */}

          
         {them.palette.mode === "light" ? 
         <IconButton color="inherit" onClick={() => {
          localStorage.setItem("currentMode", them.palette.mode === "dark" ?"light" :"dark" )
           setMode((prevMode ) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
           
         }
         }>
            <WbSunnyOutlinedIcon />
          </IconButton>

        :  <IconButton color="inherit" onClick={() => {
        localStorage.setItem("currentMode",them.palette.mode === "dark" ? "light" :"dark" )
           setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
        }
        }>
        <DarkModeOutlinedIcon />
      </IconButton>

        }


          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
       
          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton color="inherit">
            <Person2OutlinedIcon />
          </IconButton>
          </Stack>
            </Toolbar>
          </AppBar>
  )
}
