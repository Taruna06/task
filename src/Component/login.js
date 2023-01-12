import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function BasicExample() {
  return (
    <>

   <div className='align-items-center main'>
   <Container className="d-flex vh-100 back">
  <Row className="m-auto align-self-center">
    <Col>
   <Card className="card-component">
    <div className="heading centered-div title title-2">Login</div>
    <fetchApi/>
    <div className='centered-div'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <div className='centered-div'>
    <ul>
            <li>
              <Link to="/sign">New User? Sign Up</Link>
            </li>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
          
    </div>
    

        

    </Card>
    </Col>
    </Row>
    </Container>
    </div>
 </>
  );
}

export default BasicExample;