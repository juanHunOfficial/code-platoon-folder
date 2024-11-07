import { useOutletContext } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';


const AreaChartComponent = () =>{
    const { data } = useOutletContext();
    return(
        <>
            <h1>Area Chart Example</h1>
            <div style={{height: "600px", width: "600px", backgroundColor: "black"}}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500} height={400} data={data} margin={{right: 50, top: 50, bottom: 30}}>
                        <YAxis/>
                        <XAxis dataKey="name"/>
                        <CartesianGrid strokeDasharray="5 5"/>
                        <Legend/>
                        <Tooltip/>
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke='#2563eb'
                            fill='#3b82f6'
                            stackId='1'
                        />
                        <Area 
                            type="monotone"
                            dataKey="pv"
                            stroke='#7c3add'
                            fill='#8b5cf6'
                            stackId='2'
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default AreaChartComponent;