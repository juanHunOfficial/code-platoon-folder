import { useState, useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [firstName, setFirstName] = useState("")
    const [registration, setRegistration] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
            'email' : email,
            'password': password,
            'firstname': firstName,
            'age': age,
            'registration' : registration
        }
        console.log(formData)
    }

  return (
    <Form onSubmit = {(e)=>handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value={email}
        onChange = {(e)=> setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        value={password}
        onChange = {(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control
        value={firstName}
        onChange = {(e)=>setFirstName(e.target.value)}
        type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control
        value={age}
        onChange = {(e)=>setAge(e.target.value)}
        type="number" placeholder="Age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        value={registration}
        onChange={(e)=>setRegistration(e.target.checked)}
        type="checkbox" label="Register" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignupForm;