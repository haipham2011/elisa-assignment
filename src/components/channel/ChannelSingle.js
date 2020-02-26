import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row } from "react-bootstrap";

const ChannelSingle = props => {
  const channel = useSelector(state => state.channels).filter(element => {
    return element.id === parseInt(props.match.params.id);
  })[0];

  console.log(channel);
  return (
    <Container className="d-flex justify-content-center">
      <Row>
      <Card>
        <Card.Img variant="top" src={channel.logos[7].url} className="channel-logo"/>
        <Card.Body>
          <Card.Title>{channel.name}</Card.Title>
          <Card.Text>{channel.mediaType}</Card.Text>
          <Card.Text>{channel.recordable ? "Recordable" : "Not Recordable"}</Card.Text>
          <Card.Text>{channel.recordableForAuthorized ? "Recordable for authorization" : "Recordable for authorization"}</Card.Text>
          <Card.Text>{channel.scrambled ? "Scrambled" : "Not Scrambled"}</Card.Text>
          <Card.Text>{channel.description}</Card.Text>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  );
};

export default ChannelSingle;
