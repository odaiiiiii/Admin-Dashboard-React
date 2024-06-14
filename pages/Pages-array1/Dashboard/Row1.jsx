import {  Stack, useTheme, } from "@mui/material";
import Card from "./Card";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import TrafficIcon from '@mui/icons-material/Traffic';
 
  import { Data1, Data2, Data3, Data4 } from "./Data";



export default function Row1() {

  return (
    
    <Stack direction={"row"} flexWrap={"wrap"} gap={"7px"}  justifyContent={{xs:"center" ,sm:"space-between"}}  sx={{marginTop:"1rem"}}>
      
        <Card icon={<EmailIcon sx={{color:"#A8A8A8"}} />} Title={2000} subtitle={"Emails sent"} Typ={"14%"} data={Data1}   />
        <Card icon={<PointOfSaleOutlinedIcon sx={{color:"#A8A8A8"}}/>} Title={565} subtitle={"Sales"} Typ={"26%"} data={Data2}   />

        <Card icon={<PersonAddIcon sx={{color:"#A8A8A8"}}/>} Title={4000} subtitle={" New client"} Typ={"33%"} data={Data3}   />
        <Card icon={<TrafficIcon sx={{color:"#A8A8A8"}}/>} Title={150000} subtitle={"Traddic received"} Typ={"14%"} data={Data4}   />

     
    
    </Stack>
  )
}
