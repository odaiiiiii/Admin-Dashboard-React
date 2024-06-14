import { Box, Typography, useTheme } from "@mui/material";


export default function Notfound() {
    const them =useTheme();

  return (
    <Box sx={{textAlign:"center",mt:"10vh" }}>

        <Typography color={them.palette.error.dark} fontSize={28}>
        This page does not exist
        </Typography>

        <Typography color={them.palette.error.dark } fontSize={25}>
        Please try later....
                </Typography>
      
    </Box>
  )
}
