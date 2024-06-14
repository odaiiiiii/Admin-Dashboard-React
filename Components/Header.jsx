




import { Box, Typography, useTheme } from "@mui/material"





export default function Header({title,subtitle}) {
    const theme =useTheme()

  return (
    <Box mb={"10px"}>
    <Typography color={theme.palette.info.light} variant="h4" mb={"9px"} fontWeight={"bold"}>   {title}    </Typography>
    <Typography variant="h6" ml={"5px"} > {subtitle} </Typography>

  </Box>)
}
