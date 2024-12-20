import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userSignup } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function SignupForm() {
    const navigate = useNavigate();
    const { setUser } = useOutletContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [firstName, setFirstName] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        let formData = {
            'email' : email,
            'password': password,
            'firstName': firstName,
            'age': age,
        }
        setUser(await userSignup(formData)) 
        navigate('/')
    }

  return (
    <div className='displayed_sign_in_and_up_forms'>
      <div className='sign_up_form_container' >
        <Form onSubmit = {(e)=>handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange = {(e)=> setEmail(e.target.value)}
              type="email" 
              placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange = {(e)=>setPassword(e.target.value)}
              type="password" 
              placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstName}
              onChange = {(e)=>setFirstName(e.target.value)}
              type="text"
              placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={age}
              onChange = {(e)=>setAge(e.target.value)}
              type="number" 
              placeholder="Age" />
          </Form.Group>
          <div className='sign_up_and_in_buttons' >
            <Button
              className='react_btns' 
              variant="secondary" 
              type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignupForm;