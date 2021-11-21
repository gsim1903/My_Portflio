
import React from "react";
import { Card, Image } from "semantic-ui-react";
import Curriculumvitae from "./cv";

const CurriculumvitaeCard = ({ Curriculumvitae }) => {
  return (
    <Card>
      <Image src={Curriculumvitae.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Curriculumvitae.name}</Card.Header>
        <Card.Description>{Curriculumvitae.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CurriculumvitaeCard;