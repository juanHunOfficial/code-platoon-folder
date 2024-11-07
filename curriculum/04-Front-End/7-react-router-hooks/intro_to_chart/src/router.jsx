import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AreaChartComponent from './components/AreaChart.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/area_chart/",
                element: <AreaChartComponent />
            },
        ]
    }
])
export default router