import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';
import './About.css';

const about = (props)=> {
    return(
        <div className="about">
            <Container className="about-container" fluid>
                 <Row className="d-flex flex-row justify-content-center align-items-center">
                     <Col md={5}>
                     <h1>{props.title}</h1>
                     </Col>
                     <Col md={5}>
                         <img src="naz2.jpg" alt="photo of naz" height="100px" width="auto"/>
                         <img src="Naz.png" alt="photo of naz" height="100px" width="auto"/>
                         <img src="nazPluto.jpg" alt="second photo of naz" height="100px" width="auto"/>

                     </Col>
                 </Row>
                   
                
            </Container>
            <Container className="about-body">
                <Row className="my-3" >
                    <Col  sm={4}>
                        <h3 className="mb-3 border-bottom">Skills & Technologies</h3>
                        <ul className="skills-list">
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>HTML5/CSS</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>JavaScript</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>jQuery</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>Node</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>Express</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>Handlebars/EJS</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>MongoDB/mySQL</li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>React/Redux</li>
                        </ul>
                    </Col>
                    <Col  sm={4}>
                        <h3 className="mb-3 border-bottom">Professional Timeline</h3>
                        <p>-> This is where I developed my passion for coding throught the Bioinformatics classes
                            that I took during this period of time. 
                           -> Shortly after I began coding on my own, taking various courses to help me understand 
                           basic algorithms and data-structures through languages like C and Java. 
                        </p>
                        <div>
                            Display Links To
                            -> LinkedIn
                            -> Resume
                            -> GitHub
                        </div>
                    </Col>
                    <Col sm={4}>
                    <h3 className="mb-3 border-bottom">Lifestyle</h3>
                        <ul>
                            <h4>Boxing since I was 8 years old</h4>
                            <h4>Passionate Cook</h4>
                            <h4>Interested in Human Pyschology</h4>
                            <h4>Involved in Big Brother Not-for-profit</h4>
                        </ul>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default about;