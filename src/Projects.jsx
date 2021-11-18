import React, { Component } from 'react';
import axios from "axios";

// import { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Projects extends Component {
    state = {
        projects: []
           
    }    
        


    render () {
    const { projects } = this.state;

        let propjectsList = projects.map((project) => {
            return (
                <div id={'project-${project.id}'} key = {project.id}>
                <h3>{project.name}</h3>
                </div>
            );
        });
        return (
            <Container>
            <h1 id="projects-header">My Projects</h1>
            {propjectsList}
            </Container>
        );
    };
    
    componentDidMount() {
            axios.get("./data/projects.json").then((response) => {
            this.setState({ projects: response.data });
            });
    }

};

//  const Projects  = () => {
//     return (
//         <Container>
//             <h1 id="projects-header">My Projects</h1>
//             <p>
//             Some of the shizzle Ive been working on 
//             </p>
//         </Container>
//     );
    
 export default Projects 