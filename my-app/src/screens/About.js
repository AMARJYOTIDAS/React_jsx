import React from "react";

import Title from '../components/Title';
// import UnOrdered from '../components/UnOrdered';
// import Greeting from "../components/Greeting";


const About = () =>{
    return (
        <div>
            {/* <Greeting name=" amar" /> */}
            <Title name= " Today is friday" 
            collegeName={"nit"}
            contactNumber={30215487}
            rollNum={25052970005}
            />
            {/* <Title test= " Today we start react props" /> */}
            {/* <Title day= "Good day" /> */}
            {/* <Title dis= "set discounts" /> */}
            {/* // <UnOrdered/> */}
        </div>
    )
}

export default About