import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './common.css';
import { Outlet, Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function BasicExample2() {
  return (
    <>
    <div className='align-items-center main'>
   <Container className="d-flex vh-100 back">
  <Row className="m-auto align-self-center">
    <Col>
   <Card className="card-component">
    <div className='centered-div'>
        <row className="heading title title-2">Sign Up</row>
        </div>
        <div className='centered-div'>
<Form>
<InputGroup className="mb-3">
      <InputGroup.Text>First name</InputGroup.Text>
      <Form.Control aria-label="First name" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text>Last name</InputGroup.Text>
      <Form.Control aria-label="Last name" />
    </InputGroup>

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
            <Link to="/login">Already Registered? Login</Link>
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

export default BasicExample2;