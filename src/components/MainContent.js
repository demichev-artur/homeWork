import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

const MainContent = () => {
    return (
        <div className="w3-row">
            <div className="w3-col l8 s12">
                <Card img="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" titleH3="TITLE HEADING" date="April 7, 2014" text="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla." clsComments="w3-tag" comments="0"/>
                <Card img="https://www.w3schools.com/w3images/bridge.jpg" alt="Norway" titleH3="BLOG ENTRY" date="April 2, 2014" text="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
                        euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
                        ultricies mi non congue ullam corper. Praesent tincidunt sed
                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam
                        non fringilla." clsComments="w3-badge" comments="2"/>
            </div>
            <Sidebar/>
        </div>
    )
}

export default MainContent;