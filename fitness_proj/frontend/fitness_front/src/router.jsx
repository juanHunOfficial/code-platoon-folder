import {createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import App from './App';
import { getInfo } from './utilities';

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
        ],
    },
]);

export default router;