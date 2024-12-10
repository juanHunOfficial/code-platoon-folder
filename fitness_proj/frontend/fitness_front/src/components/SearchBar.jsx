import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {

    return(
        <>
            <div className='search_result_card' style={{display: 'flex', margin: '100px auto', justifyContent: 'center'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter a muscle" />
                        <Form.Text className="text-muted">
                            Enter a particular muscle group you with to target. (ex: biceps, chest, lower back)
                        </Form.Text>
                    </Form.Group>
                    <div className='search_and_info_button' style={{display: 'flex'}}>
                        <Button style={{marginRight: '20px', width: '100px'}} variant="primary" type="submit">Search</Button>
                        <Button style={{width: '100px'}} variant="primary" type="submit">Info</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SearchBar