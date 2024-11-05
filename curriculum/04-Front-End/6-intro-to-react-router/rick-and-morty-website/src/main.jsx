import { createRoot } from 'react-dom/client'
import router from './router'
import { RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
