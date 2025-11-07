import React from 'react'
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip } from 'recharts';
const LineGraph = ({data}) => {
  return (
    <>
    <LineChart
                style={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
    
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="itemName" interval={0}/>
                <YAxis width="auto" />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="bump" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
    </>
  )
}

export default LineGraph
