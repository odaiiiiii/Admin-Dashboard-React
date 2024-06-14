

import {  Box, Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

 

 const  Card=( {icon ,Title,subtitle,Typ ,data})=> {
  return (
    
    
    <Paper sx={{minWidth:"310px",minHeight:"160px" ,display:"flex" ,p:"1.3rem 1.5rem"  ,justifyContent:"space-between" ,flexGrow:1}}>
            <Stack  gap={2} justifyContent={"space-between"}>
                {icon}
                <Typography sx={{fontSize:"16px"}}>{Title}</Typography>
                <Typography   sx={{fontSize:"13px"}}>{subtitle}</Typography>

            </Stack>

            <Stack  alignItems={"center"} justifyContent={"space-between"}>
                <Box height={"90px"} width={"90px"}  >
                <ResponsivePie 
        data={data}
        margin={{ top: 20, right: 80, bottom: 30, left: 80 }}
        innerRadius={0.65}
        padAngle={0.7}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
       
    />

                </Box>
                
                <Typography>{Typ}</Typography>

            </Stack>
        </Paper>

    
  )
}

export default Card