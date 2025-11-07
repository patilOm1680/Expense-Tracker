import React, { useContext, useState } from 'react'
// import * as React from 'react';
import "./Visualize.css"
import PieComponent from "../../components/charts/ProgressBar/PieComponent.jsx"
import PieChartComponent from '../../components/charts/pieChart/PieChartComponent.jsx';
import BarGraph from '../../components/charts/barGraph/BarGraph.jsx';
import LineGraph from '../../components/charts/lineGraph/LineGraph.jsx';
import UserContext from '../../Context/UserContext.js';


const Visualize = () => {

  const{formData}=useContext(UserContext);
  // const [activeIndex, setActiveIndex] = useState(-1);

  // const data = [
  //     { name: 'Geeksforgeeks', students: 400 },
  //     { name: 'Technical scripter', students: 700 },
  //     { name: 'Geek-i-knack', students: 200 },
  //     { name: 'Geek-o-mania', students: 1000 }
  // ];

  //   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#c509ebff'];

  //   const onPieEnter = (_, index) => {
  //     setActiveIndex(index);
  //   };

  const data = formData.map((obj) => {
    return {
      itemName: obj.itemName,
      price: parseInt(obj.price, 10)
    };
  });


  //   console.log(data);

  // const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  


  // totoalincome
  const totalExpense = data.reduce((total, obj) => total + obj.price, 0);

  const totalIncome=150000;
  const savings=totalIncome-totalExpense;
  // console.log(savings)
  // console.log(totalIncome)
  let savingPercent=Math.floor((savings*100)/totalIncome);

  return (

    <>
    <div className='expenseOverview'>
        <div className="headingContent">
          <i class="icon fa fa-line-chart fa-xl" aria-hidden="true"></i>
            <h2>Expense Overview</h2>
        </div>
        
    </div>
      <div className='chartContainer'>
        <div className="IncomeExpense">
          <div className="totalIncome">
            <div className="heading">
              <i class="icon fa-solid fa-sack-dollar fa-xl"></i>
              <h3>Total Income</h3>
            </div>

            <div>
              <p> &#8377; 1,50,000</p>
            </div>
          </div>
          <div className="totalIncome">
            <div className="heading">
              <i class="icon fa-solid fa-cart-shopping fa-xl"></i>
              <h3>Total Expense</h3>
            </div>
            <div>
              <p> &#8377; {totalExpense.toLocaleString()}</p>
            </div>
          </div>
        </div>


        <div className='barChart'>
          <div className='heading'>
            <i class="icon fas fa-chart-bar fa-xl"></i>
            <h3>Bar Graph</h3>
          </div>

          {/* bar graph  */}
          <BarGraph data={data}/>

        </div>


        <div className='pieContainer'>
          <div className="heading">
            <i class="icon fa-solid fa-chart-pie fa-xl"></i>
            <h3>Pie Chart</h3>
          </div>

          {/* pie chart  */}
          <PieChartComponent data={data}/>

        </div>






      </div>

      <div className="chartContainer2">
        <div className="lineChartContainer">

          {/* line graph  */}
          <LineGraph data={data}/>
        </div>

        <div className="savings">
          <div className="heading">
              <i class="icon fa-solid fa-sack-dollar fa-xl"></i>
              <h3>Current Savings</h3>
            </div>

            {/* progress bar  */}
           <PieComponent percentage={savingPercent} colour="blue" />
           <p> &#8377; {savings.toLocaleString()}</p>
        </div>



      </div>

    </>

  )
}

export default Visualize
