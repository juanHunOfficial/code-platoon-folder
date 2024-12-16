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
        ]
    } 

    const lineChartDataSets ={
        labels: exerciseSelected.charts.map(chart => `Workout #${chart.iteration}`), 
        datasets: [
            { 
                label : "Actual Rep Count",
                data: exerciseSelected.charts.map(chart => chart.actual_num_of_sets),
                borderColor: 'blue',
            },
            { 
                label : "Goal Rep Count",
                data: exerciseSelected.charts.map(chart => chart.goal_num_of_sets),
                borderColor: 'gold',
            }
        ]
    }
    return(
        <>
            <Line data={lineChartDataReps} />
            <Line data={lineChartDataSets} />
        </>
    )
}

export default ChartPage