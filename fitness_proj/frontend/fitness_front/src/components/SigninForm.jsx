import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SigninForm = () => {
    return(
        <div style={{background: "grey",display: "flex", justifyContent: "center", margin: "20px auto"}}>
            <div style={{ height: "400px", width: "500px", padding: "30px"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default SigninForm