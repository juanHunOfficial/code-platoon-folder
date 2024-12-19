import { useOutletContext } from "react-router-dom";
import { Line } from 'react-chartjs-2'
import NewChartEntryModalForm from "../components/NewChartEntryModalForm";
import DeleteDataPointModal from "../components/DeleteDataPointModal";
import UpdateChartEntryModalForm from "../components/UpdateDataPoint";

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
        labels: exerciseSelected.charts.map((chart, index) => `Workout #${index+1}`), 
        datasets: [
            { 
                label : "Actual Rep Count",
                data: exerciseSelected.charts.map(chart => chart.actual_num_of_reps),
                borderColor: '#d90429',
            },
            { 
                label : "Goal Rep Count",
                data: exerciseSelected.charts.map(chart => chart.goal_num_of_reps),
                borderColor: '#2b2d42',
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
        labels: exerciseSelected.charts.map((chart, index) => `Workout #${index+1}`), 
        datasets: [
            { 
                label : "Actual Set Count",
                data: exerciseSelected.charts.map(chart => chart.actual_num_of_sets),
                borderColor: '#d90429',
            },
            { 
                label : "Goal Set Count",
                data: exerciseSelected.charts.map(chart => chart.goal_num_of_sets),
                borderColor: '#2b2d42',
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
        labels: exerciseSelected.charts.map((chart, index) => `Workout #${index+1}`), 
        datasets: [
            { 
                label : "Exercise Weight",
                data: exerciseSelected.charts.map(chart => chart.weight),
                borderColor: '#d90429',
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
        <div className='page_div '>
          <div className="charts_page_div">
          {exerciseSelected ? 
                  <div className="charts_container_div" >
                      <div className="single_chart" >
                          <Line options={lineChartOptionsWeight} data={lineChartDataWeight} />
                      </div>
                      <div className="single_chart">
                          <Line options={lineChartOptionsReps} data={lineChartDataReps} />
                      </div>
                      <div className="single_chart">
                          <Line options={lineChartOptionsSets} data={lineChartDataSets} />
                      </div>   
                  </div>   
              : null 
          }
          <div className="charts_page_div charts_page_btns_div" >
            <div className="charts_page_modals" >
              <NewChartEntryModalForm 
                exerciseSelected={exerciseSelected} 
                setExerciseSelected={setExerciseSelected}
              />
            </div>
            <div className="charts_page_modals" >
              <UpdateChartEntryModalForm 
                exerciseSelected={exerciseSelected} 
                setExerciseSelected={setExerciseSelected} 
              />
            </div>
            <div className="charts_page_modals" >
              <DeleteDataPointModal 
                exerciseSelected={exerciseSelected} 
                setExerciseSelected={setExerciseSelected} 
              />
            </div>
          </div>
          </div>
        </div>
    )
}

export default ChartPage