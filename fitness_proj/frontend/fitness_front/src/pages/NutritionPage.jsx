import NutritionInfoCard from "../components/NutritionInfoCard"
import NutritionSearchBar from "../components/NutritionSearchBar"

const NutritionPage = () => {
    return (
        <div className="page_div tracker_pages">
            <NutritionSearchBar />
            <NutritionInfoCard />
        </div>
        
    )
}

export default NutritionPage