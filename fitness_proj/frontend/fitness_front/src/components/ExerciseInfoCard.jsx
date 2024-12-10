import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ExerciseInfoCard = () => {
    const stockPhotos = []

    return(
        <>
            <div className='search_result_card' style={{display: 'flex', margin: '100px auto', justifyContent: 'center'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{height: '250px'}} src="" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ExerciseInfoCard