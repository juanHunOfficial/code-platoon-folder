import { useOutletContext } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';


const AreaChartComponent = () =>{
    const { data } = useOutletContext();

    const getIntroOfPage = (label) => {
        if (label === 'Page A') {
          return "Page A is about men's clothing";
        }
        else if (label === 'Page B') {
          return "Page B is about women's dress";
        }
        else if (label === 'Page C') {
          return "Page C is about women's bag";
        }
        else if (label === 'Page D') {
          return 'Page D is about household goods';
        }
        else if (label === 'Page E') {
          return 'Page E is about food';
        }
        else if (label === 'Page F') {
          return 'Page F is about baby food';
        }
        else if (label === 'Page G') {
            return 'Page G is about cat food';
        }
        else 
            return '';
      };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );
        }
      
        return null;
      };

    return(
        <>
            <h1 style={{textAlign: "center" ,margin: "20px auto"}} >Area Chart Example</h1>
            <div style={{height: "600px", width: "600px", backgroundColor: "", margin:"50px auto"}}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500} height={400} data={data} margin={{right: 50, top: 50, bottom: 30}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                        <YAxis/>
                        <XAxis dataKey="name"/>
                        <CartesianGrid strokeDasharray="5 5"/>
                        <Legend/>
                        <Tooltip content={<CustomTooltip/>} />
                        <Area
                            type="monotone" //this determines the shape of the graph line for area its monotone, linear, and step for example
                            dataKey="uv" //what is the key of the item you wish to reference for the data
                            stroke="#8884d8" //color of the line of the green graph for example
                            fill="url(#colorUv)" //color is being made by <linearGradient></linearGradient> which is built in to recharts
                            stackId='1' //the particular z-index if you will
                            fillOpacity={1} //this fullness of the opacity(0.1 - 1.0 for example)
                        />
                        <Area 
                            type="monotone"
                            dataKey="pv"
                            stroke="#82ca9d"
                            fill="url(#colorPv)"
                            stackId='2'
                            fillOpacity={1}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default AreaChartComponent;