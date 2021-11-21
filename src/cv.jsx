import React, { Component } from 'react';
import axios from "axios";
import { Container, Grid } from 'semantic-ui-react';
import CurriculumvitaeCard from './cvCard';

class Curriculumvitae extends Component {
    state = {
        curriculumvitae: []
    }    
    render () {

    const { curriculumvitae } = this.state;

        let curriculumvitaeList = curriculumvitae.map((curriculumvitae) => {
            return (
                <div id={`curriculumvitae-${curriculumvitae.id}`} key={curriculumvitae.id}>
                <CurriculumvitaeCard curriculumvitae={curriculumvitae} />
                </div>
            );
        });
        return (
            <Container>
            <h1 id="cv-header">My CV</h1>
            
            <Grid>{curriculumvitaeList}</Grid>
            </Container>
        );
    };
    
    componentDidMount() {
            axios.get("./data/cv.json").then((response) => {
            this.setState({ curriculumvitae: response.data });
            });
    }

};

export default Curriculumvitae