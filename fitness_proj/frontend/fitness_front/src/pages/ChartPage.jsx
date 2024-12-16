import { useOutletContext } from "react-router-dom";
import { Line } from 'react-chartjs-2'

import { Chart as ChartJs, 
         CategoryScale, 
         LinearScale, 
         PointElement, 
         LineElement,
         Title,
         Tooltip,
         Legend} from 'chart.js'

ChartJs.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
)

const ChartPage = () => {
    const { exerciseSelected } = useOutletContext();
    
    
    
    const lineChartDataReps = {
        labels: exerciseSelected.charts.map(chart => `Workout #${chart.iteration}`), 
        datasets: [
            { 
                label : "Actual Rep Count",
                data: exerciseSelected.charts.map(chart => chart.actual_num_of_reps),
                borderColor: 'blue',
            },
            { 
                label : "Goal Rep Count",
                data: exerciseSelected.charts.map(chart => chart.goal_num_of_reps),
                borderColor: 'gold',
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }

    const lineChartOptionsReps = {
        plugins: {
          title: {
            display: true,          
            text: 'Rep Count Over Time', 
            font: {
              size: 18,            
              weight: 'bold',      
            },
            padding: { top: 10, bottom: 30 }, 
          },
        },
        responsive: true,        
        maintainAspectRatio: false, 
      };

    const lineChartDataSets ={
        labels: exerciseSelected.charts.map(chart => `Workout #${chart.iteration}`), 
        datasets: [
            { 
                label : "Actual Set Count",
                data: exerciseSelected.charts.map(chart => chart.actual_num_of_sets),
                borderColor: 'blue',
            },
            { 
                label : "Goal Set Count",
                data: exerciseSelected.charts.map(chart => chart.goal_num_of_sets),
                borderColor: 'gold',
            }
        ]
    }
    const lineChartOptionsSets = {
        plugins: {
          title: {
            display: true,          
            text: 'Sets Count Over Time', 
            font: {
              size: 18,            
              weight: 'bold',      
            },
            padding: { top: 10, bottom: 30 }, 
          },
        },
        responsive: true,        
        maintainAspectRatio: false, 
      };
    return(
        <>
        {exerciseSelected ? 
                <div style={{
                            display: 'flex', 
                            flexDirection: "column", 
                            margin: "60px auto", 
                            justifyContent:"center", 
                            alignItems:"center"
                        }} >
                    <div style={{height: "400px", width: "80%", position: "relative", marginBottom: "50px"}}>
                        <Line options={lineChartOptionsReps} data={lineChartDataReps} />
                    </div>
                    <div style={{height: "400px", width: "80%", position: "relative"}}>
                        <Line options={lineChartOptionsSets} data={lineChartDataSets} />
                    </div>
                </div>   
            : null 
        }   
        </>
    )
}

export default ChartPage