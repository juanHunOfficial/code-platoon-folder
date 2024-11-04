import { createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutRickPage from "./pages/AboutRickPage.jsx"
import CharacterLookUp from "./pages/CharacterLookUp.jsx"
import CharacterInfoPage from "./pages/CharacterInfoPage.jsx"
import { useState } from "react"

const [charData, setCharData] = useState(" ")

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
            {
                path: "character-lookup/",
                element: <CharacterLookUp setCharData={setCharData} />
            },
            {
                path: "character-info/",
                element: <CharacterInfoPage charData={charData} />
            }
        ]
    }
])

export default router