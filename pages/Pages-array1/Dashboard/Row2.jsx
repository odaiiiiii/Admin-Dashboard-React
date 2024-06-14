import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Linechart from "../../Pages-arra3/Line/Linechart";
import DownloadIcon from '@mui/icons-material/Download';
import { transactions } from "./Data";

export default function Row2() {
  const theme =useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} marginTop={1.5} gap={1.2} >

   

    <Paper sx={{ minWidth:"600px",flexGrow:"1", }}>
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
      <Box>
      <Typography  ml={6} mt={3} mb={1.5} color={theme.palette.secondary.main} variant="h6" >
      Revenue Generation
      </Typography>

      <Typography ml={6}>
        $45,222,650
      </Typography>
      </Box>
      <Box>
        <IconButton  sx={{mr:"3rem"}}> <DownloadIcon/></IconButton>        
        </Box>
    </Stack>
    <Linechart isDashbord={true} />
    </Paper>


    <Box sx={{ maxHeight:"400px", overflow:"auto",  flexGrow:"1",minWidth:"250px"}}  >
      <Paper  >

      <Typography 
      variant="h6" 
      color={theme.palette.secondary.main}
      p={2}
      fontWeight={"bold"}
      
   
      >
        Recent transaction
      </Typography  >

      </Paper>
      



      {transactions.map((item) => {
  return (
    <Paper sx={{display:"flex", justifyContent:"space-between", alignItems:"center", p:"10px 15px", mt:".8rem"}} key={item.textid}>
      <Box>
        <Typography>{item.textid}</Typography>
        <Typography>{item.user}</Typography>
      </Box>
      <Typography>{item.date}</Typography>
      <Typography bgcolor={"#FF4500"} p={.6} borderRadius={2} fontSize={16} width={"4rem"} textAlign={"center"}>
        ${item.cost}
      </Typography>
    </Paper>
  );
})}

    


    </Box>
      
    </Stack>
  )
}
