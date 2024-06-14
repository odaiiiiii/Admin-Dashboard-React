

import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

const data =[


  {
    "id": "us",
    "color": "hsl(298, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 57
      },
      {
        "x": "helicopter",
        "y": 20
      },
      {
        "x": "boat",
        "y": 169
      },
      {
        "x": "train",
        "y": 14
      },
      {
        "x": "subway",
        "y": 77
      },
      {
        "x": "bus",
        "y": 173
      },
      {
        "x": "car",
        "y": 114
      },
      {
        "x": "moto",
        "y": 292
      },
      {
        "x": "bicycle",
        "y": 130
      },
      {
        "x": "horse",
        "y": 216
      },
      {
        "x": "skateboard",
        "y": 257
      },
      {
        "x": "others",
        "y": 294
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(153, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 94
      },
      {
        "x": "helicopter",
        "y": 173
      },
      {
        "x": "boat",
        "y": 8
      },
      {
        "x": "train",
        "y": 85
      },
      {
        "x": "subway",
        "y": 253
      },
      {
        "x": "bus",
        "y": 198
      },
      {
        "x": "car",
        "y": 132
      },
      {
        "x": "moto",
        "y": 204
      },
      {
        "x": "bicycle",
        "y": 291
      },
      {
        "x": "horse",
        "y": 56
      },
      {
        "x": "skateboard",
        "y": 293
      },
      {
        "x": "others",
        "y": 209
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(87, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 25
      },
      {
        "x": "helicopter",
        "y": 157
      },
      {
        "x": "boat",
        "y": 255
      },
      {
        "x": "train",
        "y": 69
      },
      {
        "x": "subway",
        "y": 45
      },
      {
        "x": "bus",
        "y": 32
      },
      {
        "x": "car",
        "y": 189
      },
      {
        "x": "moto",
        "y": 27
      },
      {
        "x": "bicycle",
        "y": 82
      },
      {
        "x": "horse",
        "y": 298
      },
      {
        "x": "skateboard",
        "y": 105
      },
      {
        "x": "others",
        "y": 270
      }
    ]
  }
]


export default function Linechart({isDashbord=false}) {
  const them =useTheme();

  return (
    <Box   sx={{
      height: isDashbord ? "300px" : "500px",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }}  >

<ResponsiveLine
 theme={{
  "text": {
      "fontSize": 11,
      "fill": "#333333",
      "outlineWidth": 0,
      "outlineColor": "transparent"
  },
  "axis": {
      "domain": {
          "line": {
              "stroke": "#777777",
              "strokeWidth": 1
          }
      },
      "legend": {
          "text": {
              "fontSize": 12,
              "fill": them.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "ticks": {
          "line": {
              "stroke": "#777777",
              "strokeWidth": 1
          },
          "text": {
              "fontSize": 11,
              "fill": them.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "grid": {
      "line": {
          "stroke": "#dddddd",
          "strokeWidth": 0
      }
  },
  "legends": {
      "title": {
          "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "text": {
          "fontSize": 11,
          "fill": them.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "ticks": {
          "line": {},
          "text": {
              "fontSize": 10,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "annotations": {
      "text": {
          "fontSize": 13,
          "fill": "#333333",
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "link": {
          "stroke": "#000000",
          "strokeWidth": 1,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "outline": {
          "stroke": "#000000",
          "strokeWidth": 2,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "symbol": {
          "fill": "#000000",
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      }
  },
  "tooltip": {
      "container": {
          "background": them.palette.background.default,
          "fontSize": 12
      },
      "basic": {},
      "chip": {},
      "table": {},
      "tableCell": {},
      "tableCellValue": {}
  }
}}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

    </Box>
  )
}
