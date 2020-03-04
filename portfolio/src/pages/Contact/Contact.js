import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Axios from 'axios';
import './Contact.css';

class Contact extends Component {
    // constructor(props){
    //     super(props);
    // }
    state = {
        name: "",
        email: "",
        message: "",
        disabled: false,
        emailSent: null
    }
    changeHandler = (event)=> {
        // console.log(event.value);
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });

    }
    submitHandler = (event)=> {
        event.preventDefault();
        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api', this.state)
        .then(result => {
            if(result.data.success){
                this.setState({
                    disabled: false,
                    emailSent: true,
                    name: "",
                    email: "",
                    message: ""
                });    
            }else{
                this.setState({
                    disabled: true,
                    emailSent: false
                });
            }})
            .catch(err=>{
                this.setState({
                    disabled: true,
                    emailSent: false
                });
            });
    }
    render() {
        return(
            <div className="contact">
              
                    <Container className="contact-container mb-4" fluid>
                        <h1>{this.props.title}</h1>
                    </Container>
              
                <Container className="contact-body" >
                    <div className="row">
                        <div className="col-8">
                        <Form onSubmit={this.submitHandler}>
                             <Form.Group>
                                 <Form.Label className="mt-3" htmlFor="full-name">Name:</Form.Label>
                                 <Form.Control id="full-name" name="name" type="text"
                                               onChange={this.changeHandler}
                                               value={this.state.name}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                 <Form.Label className="mt-3" htmlFor="email">E-mail</Form.Label>
                                 <Form.Control id="email" name="email" type="text" 
                                                          onChange={this.changeHandler} 
                                                          value={this.state.email}></Form.Control>
                             </Form.Group>
                             <Form.Group>
                                   <Form.Label className="mt-3" htmlFor="message">Enter Your Message</Form.Label>
                                   <Form.Control id="message" name="message" type="text" as="textarea" rows="3"
                                                    onChange={this.changeHandler} 
                                                    value = {this.state.message}/>

                             </Form.Group>
                             <Button className="d-inline-block" type="submit" disabled={this.state.disabled}>
                                 Submit</Button>

                            { this.state.emailSent === true && <p className="d-inline success-msg">Email Sent Successfully</p>}
                            { this.state.emailSent === false && <p className="d-inline err-msg">Failed to Send</p>}
                        </Form>
                        </div>
                        <div className="col-4">
                            <h6>This is where I will place the map</h6>
                        </div>
                    </div>
                </Container>

            </div>

        )
    }
}

export default Contact;