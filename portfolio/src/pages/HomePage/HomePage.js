import React, { Component } from 'react';
import JumboHome from "../../components/JumboHome/JumboHome";
import Projects from "../../components/Projects/Projects"; //REMOVE FROM COMPONENTS
import './HomePage.css';
import SideDrawer from '../../components/SlideDrawer/SlideDrawer';
import BackDrop from  '../../components/SlideDrawer/Backdrop/Backdrop';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Btn from '../../components/Buttons/Button';
// homepage will need to be turned into a class component as i will create a state that I will be 
// using for all 3 projects and this state info will be filling in the project component 
// Each project component will render project specific info
class HomePage extends Component {
    
    state ={
        isViewedOne: false, 
        isViewedTwo: false,
        isViewedThree: false,
        isDrawerOpen: false

    }
    drawerToggleClickHandlerOne = () => {
        this.setState({
          isViewedOne: true,
          isDrawerOpen: !this.state.isDrawerOpen,
          
        });
    }
    drawerToggleClickHandlerTwo = () => {
        this.setState({
          isViewedTwo: true,
          isDrawerOpen: !this.state.isDrawerOpen,
         
        });
    }
    drawerToggleClickHandlerThree = () => {
        this.setState({
          isViewedThree: true,
          isDrawerOpen: !this.state.isDrawerOpen,
          
        });
    }
    backdropClickHandler = () => {
        this.setState({
          isDrawerOpen: false,
          isViewedOne: false,
          isViewedTwo: false,
          isViewedThree: false
        });
    }
    render(){
        let backdrop = null;
        if(this.state.isDrawerOpen){
            backdrop = <BackDrop close={this.backdropClickHandler} />
        }
        return (
            <div className="home">
                <SideDrawer
                    one ={this.state.isViewedOne}
                    two={this.state.isViewedTwo}
                    three={this.state.isViewedThree} 
                    show={this.state.isDrawerOpen} />
                {backdrop}
                <JumboHome titleHome  = {this.props.title}/>
                <div>
                    <h2 className="mt-3 subtitle">{this.props.subtitle}</h2>
                </div>    
                {/* <Projects viewProject = {this.drawerToggleClickHandler}/>                */}
                <Container className="projects-container p-4" fluid>
                    <Row className="Projects mt-2">
                        <Col md={4} className="Project">
                            <div>
                            <Btn clicked={this.drawerToggleClickHandlerOne}><img className="mr-2" src="london-eye.png"/>@Backstage</Btn>
                            </div>
                            <div className="p-image">
                                <Image src="music.jpg" fluid/>
                            </div>
                        </Col>
                        <Col md={4} className="Project">
                            <Btn clicked={this.drawerToggleClickHandlerTwo}><img className="mr-2" src="london-eye.png"/>Live Chatroom</Btn>
                            <div className="p-image">
                                <Image src="study.jpg" fluid/>
                            </div>
                        </Col>
                        <Col md={4} className="Project">
                            <Btn clicked={this.drawerToggleClickHandlerThree}><img className="mr-2" src="london-eye.png"/>Sandwich-Shop</Btn>
                            <div className="p-image">
                                <Image src="sanwich.jpg" fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}



export default HomePage;