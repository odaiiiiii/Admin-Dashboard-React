import { DataGrid } from "@mui/x-data-grid"
import { rows} from './DataTeam'
import { Box, Typography, useTheme } from "@mui/material"
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../../Components/Header";

const Team=()=>{
    const Them =useTheme()
     const columns = [
        { field: 'id', headerName:"Id" ,flex:1 ,align:"center",headerAlign:"center"},
        { field: 'Name', headerName:"Name" ,flex:1 ,align:"center",headerAlign:"center"},
        { field: 'Email', headerName:"Email" ,flex:1 ,align:"center",headerAlign:"center"},
        { field: 'Age', headerName:"Age"  ,align:"center",headerAlign:"center"},
        { field: 'Phone', headerName:"Phone" ,flex:1 ,align:"center",headerAlign:"center"},
        { field: 'Access', headerName:"Access" ,flex:1 ,align:"center",headerAlign:"center", 
        renderCell:({row:{Access}})=>{return<Box 
            sx={{
                width:"99px",textAlign:"center",p:"5px",
                borderRadius:"3px",
                display:"flex",
                justifyContent:"space-evenly",
               color:"white",
                backgroundColor: Access ==="Admin" ?Them.palette.primary.dark : Access === "User" ?"#ff8a65":"#009688",
        
            }}
        >
            { Access === "Admin" &&  (<LockOpenOutlinedIcon fontSize="small" />)  }
            {Access === "User" && (<AdminPanelSettingsOutlinedIcon fontSize="small" />)}
            {Access ==="Manager" && (<SecurityOutlinedIcon fontSize="small" />)}

            <Typography sx={{fontSize:"15px"}}>   {Access} </Typography></Box>} },
      ];
return (

   

<div style={{ height: 700,}}>
    <Header title={"Team"} subtitle={"Welcome to this Page"}/>
  <DataGrid  rows={rows} 
// @ts-ignore
  columns={columns} />
</div>

)
}

export default Team