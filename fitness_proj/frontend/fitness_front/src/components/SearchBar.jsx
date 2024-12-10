import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { getMuscle } from '../utilities';
import { useOutletContext } from 'react-router-dom';

const SearchBar = () => {
    const { searchResults, setSearchResults } = useOutletContext()
    const [muscle, setMuscle] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let finalMuscleVar = muscle
        
        if(finalMuscleVar === 'lower back'){
            finalMuscleVar= "lower_back"
        }
        else if(finalMuscleVar === 'middle back'){
            finalMuscleVar = "middle_back"
        }
        let formData = {
            'muscle' : finalMuscleVar
        }
        setSearchResults(await getMuscle(formData))
        console.log(searchResults['exercises'][0])
    }
    
    return(
        <>
            <div className='search_result_card' style={{display: 'flex', margin: '100px auto', justifyContent: 'center'}}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                        value={muscle}
                        onChange={(e)=> setMuscle(e.target.value)}
                        type="text" placeholder="Enter a muscle" />
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