import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const footer = ()=> {
    return(
        <Container className="border-top border-dark mt-5" fluid={true}>
            <Row>
                <Col>
                    <p>@Nazar Kinash</p>
                </Col>
            </Row>
           
        </Container>
        
    )
}


export default footer;