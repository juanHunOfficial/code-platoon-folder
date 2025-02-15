import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { getFood } from '../utilities';
import { useOutletContext } from 'react-router-dom';

const NutritionSearchBar = () => {
    const { setSearchResults } = useOutletContext()
    const [food, setFood] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        let formData = {
            'food' : food
        }
        try{
            const results = await getFood(formData)
            if(results){
                setSearchResults(results)
            }
        }catch(error){
            setSearchResults([])
        }
        
    }
    
    return(
        <div className='page_div'>
            <div className='search_result_card' >
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            value={food}
                            onChange={(e)=> setFood(e.target.value)}
                            type="text" 
                            placeholder="Enter a food" />
                        <Form.Text className="text-muted">
                            Enter a particular food your craving. (ex: brisket, fries, hamburger)
                        </Form.Text>
                    </Form.Group>
                    <div className='search_and_info_button'>
                        <Button 
                            className='react_btns search_btns' 
                            variant="secondary" 
                            type="submit">
                            Search
                        </Button>
                        <Button 
                            className='react_btns search_btns'  
                            variant="secondary" 
                            type="submit" 
                            onClick={handleShow}>
                            Info
                        </Button>
                    </div> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>What can I search?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The possible search items like the following: <br/> brisket, fries, soda, hamburger, 
                            and many more. 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>                    
                </Form>
            </div>
        </div>
    )
}

export default NutritionSearchBar