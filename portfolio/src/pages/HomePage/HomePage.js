import React from "react";
import JumboHome from "../../components/JumboHome/JumboHome";
import Projects from "../../components/Projects/Projects";
import './HomePage.css'

const homePage = (props)=> {
    return(
        <div className="home">
            <JumboHome titleHome  = {props.title}/>
            <h2 className="mt-3 subtitle">{props.subtitle}</h2>
           <Projects />
        </div>
    );
}

export default homePage;