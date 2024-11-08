import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useOutletContext } from 'react-router-dom';

const LineChartEx = () => {
    const { data } = useOutletContext()
    return (
        <>
            <h1 style={{margin: "50px auto", textAlign: "center"}} >Line Chart Example</h1>
            <div style={{margin: "20px auto", height: "600px", width: "600px"}} >
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} activeDot={{ fill: "black", r: 10 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} activeDot={{ fill: "black", r: 10 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default LineChartEx