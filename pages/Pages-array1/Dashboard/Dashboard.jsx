import { Box, Button, Stack } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import { DownloadOutlined } from "@mui/icons-material"
import Header from "../../../Components/Header"




 const Dashbord =()=>{
    return(<div>

   <Stack direction={"row"} justifyContent={"space-between"}> 
   <Header title={"Dashboard"} subtitle={"welcome to your Dashboard" }/>

<Box sx={{textAlign:"right"  }}  >
  <Button variant="contained" color="primary"  sx={{padding:"6px 8px",textTransform:"capitalize",mt:"2px" }}>
    {   <DownloadOutlined/>}  download reports</Button></Box>

   </Stack>
      

        <Row1/>
        <Row2/>
        <Row3/>
    </div>)
}

export default Dashbord
