import React, { Component } from 'react';
import axios from "axios";
import { Container, Grid } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    state = {
        projects: []
           
    }    
    render () {

    const { projects } = this.state;

        let projectsList = projects.map((project) => {
            return (
                <div id={`project-${project.id}`} key={project.id}>
                <ProjectCard project={project} />   
                </div>
            );
        });
        return (
            <Container>
            <h1 id="projects-header">My Projects</h1>        
            
            <Grid>{projectsList}</Grid>
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