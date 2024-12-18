import { useOutletContext } from "react-router-dom";
import { Line } from 'react-chartjs-2'
import NewChartEntryModalForm from "../components/NewChartEntryModalForm";

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
    const { exerciseSelected, setExerciseSelected } = useOutletContext();
    
    
    
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
        scales: {
            y: {
              beginAtZero: true 
            }
        }   
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
        scales: {
            y: {
              beginAtZero: true 
            }
        }   
      };

      const lineChartDataWeight ={
        labels: exerciseSelected.charts.map(chart => `Workout #${chart.iteration}`), 
        datasets: [
            { 
                label : "Exercise Weight",
                data: exerciseSelected.charts.map(chart => chart.weight),
                borderColor: 'blue',
            }
        ]
    }

    const lineChartOptionsWeight = {
        plugins: {
          title: {
            display: true,          
            text: 'Exercise Weight Over Time', 
            font: {
              size: 18,            
              weight: 'bold',      
            },
            padding: { top: 10, bottom: 30 }, 
          },
        },
        responsive: true,        
        maintainAspectRatio: false,
        scales: {
            y: {
              beginAtZero: true 
            }
        }       
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
                    <div style={{height: "300px", width: "80%", position: "relative", marginBottom: "50px"}}>
                        <Line options={lineChartOptionsWeight} data={lineChartDataWeight} />
                    </div>
                    <div style={{height: "300px", width: "80%", position: "relative", marginBottom: "50px"}}>
                        <Line options={lineChartOptionsReps} data={lineChartDataReps} />
                    </div>
                    <div style={{height: "300px", width: "80%", position: "relative", marginBottom: "50px"}}>
                        <Line options={lineChartOptionsSets} data={lineChartDataSets} />
                    </div>   
                </div>   
            : null 
        }
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: "100px" }} >
            <NewChartEntryModalForm exerciseSelected={exerciseSelected} setExerciseSelected={setExerciseSelected}/>
        </div>
        </>
    )
}

export default ChartPage