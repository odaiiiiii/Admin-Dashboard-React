import {  Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../Pages-arra3/Pie";
import Bar from "../../Pages-arra3/Bar"
import Geographychart from "../../Pages-arra3/Geography/Geographychart";




export default function Row3() {
  const them =useTheme();

  return (


    <Stack  direction="row" marginTop={".7rem"} gap={1.3} >

      <Paper sx={{width:"28%",flexGrow:"1"}}  >
      <Typography color={them.palette.primary.main} sx={{padding:"2rem 2rem .5rem 4.5rem" ,fontSize:"23px"}}  >Campaign  </Typography>

        <Pie isDashboard={true}/>

        <Typography  textAlign={"center"}    sx={{padding:"1rem 2rem .5rem 0rem" ,fontSize:"21px"}} >$42,255  revenue   </Typography>

        <Typography textAlign={"center"}   sx={{padding:"0rem 2rem 2rem 0rem" ,fontSize:"19px"}} > generated <br/> includes  extra misc

        </Typography>

      </Paper>

      <Paper sx={{width:"33%",flexGrow:"1"}}>

      <Typography color={them.palette.primary.main} sx={{padding:"2rem 2rem .5rem 4.5rem" ,fontSize:"23px"}}  > sales quantity  </Typography>


        <Bar isDashboard={true} />
</Paper>

<Paper sx={{width:"29%",flexGrow:"1"}}>

<Typography color={them.palette.primary.main} sx={{padding:"2rem 2rem 2rem 4.5rem" ,fontSize:"23px"}}  >geography  </Typography>

       <Geographychart  isDashboard={true}/>
</Paper>



    </Stack>


    
  )
}
