'use client';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const AreaChartComponent = () =>{

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