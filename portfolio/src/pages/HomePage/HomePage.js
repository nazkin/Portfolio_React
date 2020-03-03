import React from "react";
import JumboHome from "../../components/JumboHome/JumboHome";
import Projects from "../../components/Projects/Projects";
import './HomePage.css'

const homePage = (props)=> {
    return(
        <div className="home">
            <JumboHome subtitleHome = {props.subtitle}
                         titleHome  = {props.title}/>
           
           <Projects />
        </div>
    );
}

export default homePage;