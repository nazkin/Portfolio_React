import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Btn from '../Buttons/Button';
import './Projects.css';

//***************************************/
// Use img overlay on the cards carousels 
const projects = (props) => {

    return(
       
        <Container className="projects-container p-4" fluid>
            <Row className="Projects mt-2">
                <Col md={4} className="Project">
                    <div>
                    <Btn clicked={props.viewProject}><img className="mr-2" src="london-eye.png"/>@Backstage</Btn>
                    </div>
                    <div className="p-image">
                        <Image src="music.jpg" fluid/>
                    </div>
                </Col>
                <Col md={4} className="Project">
                    <Btn clicked={props.viewProject}><img className="mr-2" src="london-eye.png"/>Live Chatroom</Btn>
                    <div className="p-image">
                        <Image src="study.jpg" fluid/>
                    </div>
                </Col>
                <Col md={4} className="Project">
                    <Btn clicked={props.viewProject}><img className="mr-2" src="london-eye.png"/>Sandwich-Shop</Btn>
                    <div className="p-image">
                        <Image src="sanwich.jpg" fluid/>
                    </div>
                </Col>
            </Row>
        </Container>

   )
}

export default projects