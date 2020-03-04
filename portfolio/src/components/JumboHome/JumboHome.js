import React from "react";
import Container from 'react-bootstrap/Container';
import './Jumbo.css';

const jumboHome = (props) => {
    return(
        <Container className="jumbo" fluid>
            <Container className="border-top border-dark p-3">
                <div className="row">
                    <div className="col-md-6">
                        <img src="Naz.png" />
                    </div>
                    <div className="col-md-6">
                    <h1 className="d-flex justify-content-start">{props.titleHome}</h1>
                    </div>
                </div>    
            </Container>
        </Container> 

    );
}

export default jumboHome;