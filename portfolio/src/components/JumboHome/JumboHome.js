import React from "react";
import Container from 'react-bootstrap/Container';
import './Jumbo.css';

const jumboHome = (props) => {
    return(
        <Container className="jumbo" fluid>
            <Container className="border-top border-dark p-3">
                <h1 className="d-flex justify-content-start">{props.titleHome}</h1>
                <h2 className="d-flex justify-content-end mt-3">{props.subtitleHome}</h2>
            </Container>
        </Container> 

    );
}

export default jumboHome;