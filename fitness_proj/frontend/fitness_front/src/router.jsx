import {createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ExercisePage from './pages/ExercisePage';
import App from './App';
import { getInfo } from './utilities';
import NutritionPage from './pages/NutritionPage';
import TrackerStatsPage from './pages/TrackerStatsPage';
import WorkoutSelectedPage from './pages/WorkoutSelectedPage';
import ExerciseSelectedPage from './pages/ExerciseSelectedPage';

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
                path:'/trackers/',
                element: <TrackerStatsPage />,
            },
            {
                path:'workout/',
                element: <WorkoutSelectedPage />,
            },
            {
                path:'/selected_exercise/',
                element: <ExerciseSelectedPage />,
            },
        ],
    },
]);

export default router;