import React, { Component } from 'react';
import './SlideDrawer.css'
import Image from 'react-bootstrap/Image';

/**
* @author
* @function SlideDrawer
**/
class SlideDrawer extends Component{
    state ={
        pOne: {
            title: "@BackStage",
            summary: "@BackStage: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifOne: "Log-In & Exploring Users",
            gifImgOne: "sandwich-shop-one.gif",
            tools: ["Node.js","Express","Multer","Handlebars","mySQL", "sequelize", "Passport.js(local-strategy)"],
            gifTwo: "User Messaging",
            gifImgTwo: "sandwich-shop-two.gif"

        },
        pTwo: {
            title: "Chatroom Live",
            summary: "Chatroom:  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifOne: "Entering the Chatroom",
            gifImgOne: "chatroom-one.gif",
            tools: ["React (Hooks)", "Node.js", "Express.js", "Sockets.io"],
            gifTwo: "Communication Between Users",
            gifImgTwo: "chatroom-two.gif"
        },
        pThree: {
            title: "Sandwich-Shop",
            summary: "Sandwich-Shop: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifOne: "Building a Sandwich",
            gifImgOne: "sandwich-shop-one.gif",
            tools: ["Firebase","React","Redux","React-Router","Authentication","Higher-Order-Components"],
            gifTwo: "Going Through with Ordering",
            gifImgTwo: "sandwich-shop-two.gif"
        }
    }
    render(){
        let drawerClasses = 'side-drawer';
            if(this.props.show){
                drawerClasses = 'side-drawer open'
            }
        let project = {
            title: "",
            summary: "",
            gifOne: "",
            gifImgOne: "",
            tools: "",
            gifTwo: "",
            gifImgTwo: ""
        }; 
        if(this.props.one== true){
            project = this.state.pOne;
        }else if(this.props.two== true) {
            project = this.state.pTwo
        }else {
            project = this.state.pThree
        }
        return(
            <div className={drawerClasses}>
                <h1>{project.title}</h1>
                <div className="container drawer-info">
                    <div className="row justify-content-center">
                        <a className="mx-1 my-1 links" href=""><h6>GitHub Source</h6></a><p></p> <a className="mx-1 my-1 links" href=""><h6>Go To App</h6></a> 
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6 p-summary">
                            <h3 className="my-2 summary-title">Summary</h3>
                            <p className="summary-body">{project.summary}</p>
                        </div>
                        <div className="col-md-6">
                           
                            <Image className="my-2" src={project.gifImgOne} width="75%" height="auto" />
                            <p className="gif-desc">{project.gifOne}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            
                            <Image className="my-2" src={project.gifImgTwo} width="75%" height="auto"/>
                            <p className="gif-desc">{project.gifTwo}</p>  
                        </div>
                        <div className="col-md-6 dev-tools">
                            <h3 className="my-2 border-bottom dev-tools-title">Development Tools</h3>
                           <div className="">
                               
                                    {project.tools.map(tool=> {
                                         return (<h5>{tool}</h5>)
                                    })}  
                              
                            </div>
                        </div>    
                    </div>

                </div>
            </div>
        )
    }
}


export default SlideDrawer;