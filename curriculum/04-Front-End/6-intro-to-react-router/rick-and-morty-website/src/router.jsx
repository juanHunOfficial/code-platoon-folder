import { createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutRickPage from "./pages/AboutRickPage.jsx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "about/",
                element: <AboutRickPage />
            },
        ]
    }
])

export default router