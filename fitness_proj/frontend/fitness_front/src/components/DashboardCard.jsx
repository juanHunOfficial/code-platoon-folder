import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DashboardCard() {
  const [trackerDisplay, setTrackerDisplay] = useState(true);
  

  return (
    <Card style={{ width: '18rem' }}>
        <div style={{width:'100px', height: '180px'}} ></div>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default DashboardCard;