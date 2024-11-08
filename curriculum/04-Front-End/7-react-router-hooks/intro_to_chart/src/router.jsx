import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AreaChartComponent from './components/AreaChartEx.jsx';
import BarChartEx from './components/BarChartEx.jsx';

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
            {
                path: "/bar_chart/",
                element: <BarChartEx />
            },
        ]
    }
])
export default router