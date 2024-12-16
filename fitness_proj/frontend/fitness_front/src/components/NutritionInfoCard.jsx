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
            <div className='search_result_card' style={{padding: '20px', display: 'flex', flexWrap:'wrap', 
                                                        margin: '100px auto',  gap: '20px', overflow: 'auto', 
                                                        justifyContent:'center'}}>
            {searchResults && Array.isArray(searchResults['foods'])> 0 ? (
                searchResults['foods'].map((food, index) =>(                    
                    <Card key={index} bg='primary' text='white' style={{ width: '18rem' }}>
                        <Card.Body  >
                            <Card.Title className="fs-1" style={{marginBottom: '25px'}} >{capitalizeFirstLetter(food.name)}</Card.Title>
                                <Card.Subtitle style={{marginBottom: '10px'}} >MARCOS</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Sugar: {food.sugar_g}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Fat: {food.fat_total_g}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Carbs: {food.carbohydrates_total_g}</Card.Subtitle>
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