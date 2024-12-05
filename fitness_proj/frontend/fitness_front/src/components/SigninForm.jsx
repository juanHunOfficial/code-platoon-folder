import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from '../utilities';

const SigninForm = () => {

    const { setUser } = useOutletContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        let formData = {
            'email' : email,
            'password': password,
        }
        setUser(await userLogin(formData))
    }

    return(
        <div style={{background: "grey",display: "flex", justifyContent: "center", margin: "20px auto"}}>
            <div style={{ height: "400px", width: "500px", padding: "30px"}}>
                <Form onSubmit={(e)=> handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" placeholder="Password" />
                    </Form.Group>
                    <div style={{margin:"40px auto", display: "flex", justifyContent: "center"}}>
                    <Button variant="primary" type="submit">Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default SigninForm