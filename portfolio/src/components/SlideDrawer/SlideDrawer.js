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
            gifOne: "",
            tools: "Express, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifTwo: ""

        },
        pTwo: {
            title: "Study-Camp",
            summary: "Study-Camp:  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifOne: "",
            tools: "MongoDBIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifTwo: ""
        },
        pThree: {
            title: "Sandwich-Shop",
            summary: "Sandwich-Shop: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifOne: "",
            tools: "React: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gifTwo: ""
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
            tools: "",
            gifTwo: ""
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
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h3 className="my-2">Summary</h3>
                            <p>{project.summary}</p>
                        </div>
                        <div className="col-md-6">
                            <p>Place a photo</p>
                            <Image src="tenor.gif" width="60%" height="auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Place a photo</p>
                            <Image src="draw.gif" width="60%" height="auto"/>  
                        </div>
                        <div className="col-md-6">
                            <h3 className="my-2">Development Tools</h3>
                            <p>{project.tools}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <a href=""><h6>View Github Link</h6></a><p>||||||||</p> <a href=""><h6>Go To App</h6></a> 
                    </div>
                </div>
            </div>
        )
    }
}
// const slideDrawer = (props) => {
//     let drawerClasses = 'side-drawer';
//     if(props.show){
//         drawerClasses = 'side-drawer open'
//     }
//   return(
//     <div className={drawerClasses}>
//         <h1>Hello, I'm sliding!</h1>
//     </div>
//    )

//  }

export default SlideDrawer;