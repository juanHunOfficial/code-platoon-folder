import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';

const NutritionInfoCard = () => {
    const { searchResults } = useOutletContext()

    const capitalizeFirstLetter = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return(
        <>
            <div className='search_result_card ' >
            {searchResults && Array.isArray(searchResults['foods'])> 0 ? (
                searchResults['foods'].map((food, index) =>(                    
                    <Card className='search_result_card_body' key={index} bg='secondary' text='white'>
                        <Card.Body className='nutrition_work_results'  >
                            <Card.Title className='fs-1 search_result_card_title' >{capitalizeFirstLetter(food.name)}</Card.Title>
                                <Card.Subtitle className='search_result_card_sub_title'>MARCOS</Card.Subtitle>
                                <Card.Subtitle className='search_result_card_sub_title'>Sugar: {food.sugar_g}</Card.Subtitle>
                                <Card.Subtitle className='search_result_card_sub_title'>Fat: {food.fat_total_g}</Card.Subtitle>
                                <Card.Subtitle className='search_result_card_sub_title'>Carbs: {food.carbohydrates_total_g}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    
                ))
            ) : 
                null
            }
            </div>
        </>
    )
}

export default NutritionInfoCard