import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)