import {createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ExercisePage from './pages/ExercisePage';
import App from './App';
import { getInfo } from './utilities';
import NutritionPage from './pages/NutritionPage';
import WorkoutStatsPage from './pages/WorkoutStatsPage';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader: getInfo,
        children:[
            {
                index:true,
                element: <HomePage />,
            },
            {
                path:"/signup/",
                element: <LoginPage />,
            },
            {
                path:'/exercise/',
                element: <ExercisePage />,
            },
            {
                path:'/nutrition/',
                element: <NutritionPage />,
            },
            {
                path:'/workouts/',
                element: <WorkoutStatsPage />,
            },
        ],
    },
]);

export default router;