import React from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
const BarGraph = ({data}) => {
  return (
    <>
    <BarChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="itemName" interval={0}/>
                <YAxis dataKey="price" />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
              </BarChart>
    </>
  )
}

export default BarGraph
