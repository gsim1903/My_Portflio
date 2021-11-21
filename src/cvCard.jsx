
import React from "react";
import { Card, Image } from "semantic-ui-react";

const CurriculumvitaeCard = ({ curriculumvitae }) => {
  return (
    <Card>
      <Image src={curriculumvitae.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{curriculumvitae.name}</Card.Header>
        <Card.Description>{curriculumvitae.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CurriculumvitaeCard;