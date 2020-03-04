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
            <Container className="about-body" fluid>
                <Row className="my-3 d-flex flex-row justify-content-around align-items-center" >
                    <Col className="about-skills"  sm={4}>
                        <h3 className="mb-3 about-titles">Skills & Technologies</h3>
                        <ul className="skills-list">
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>HTML5/CSS</li>
                            <li>JavaScript<span className="mx-4 float-right"><img src="news.png" /></span></li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>jQuery</li>
                            <li>Node<span className="mx-4 float-right"><img src="news.png" /></span></li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>Express</li>
                            <li>Handlebars/EJS<span className="mx-4 float-right"><img src="news.png" /></span></li>
                            <li><span className="float-left mx-4"><img src="correct.png" alt="checkmark icon"/></span>MongoDB/mySQL</li>
                            <li>React/Redux<span className="mx-4 float-right"><img src="news.png" /></span></li>
                        </ul>
                    </Col>
                    <Col className="about-life" sm={6}>
                        <h3 className="my-3 about-titles">Professional Timeline</h3>
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
                        <h3 className="my-3 about-titles">Lifestyle & Interests</h3>
                            <h5>Boxing/MMA</h5>
                            <h5>Cooking and Gardening</h5>
                            <h5>Human Pyschology & Stoic Phylosophy</h5>
                            <h5>Favorite Book: "Crime and Punishment"</h5>
                            <h5>Favorite Movie: "What Do Women Want"</h5>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default about;