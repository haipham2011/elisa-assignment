import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannels } from "../../actions/actions";
import { CardColumns, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

const Channel = () => {
  const channels  = useSelector(state => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <Container className="mw-100">
      <CardColumns>
          {channels.map((element, index) => {
            const { id, name, logos, mediaType, description } = element;
            return(
              <Card key={index} datatest="restaurant">
              <Card.Img variant="top" src={logos[7].url} datatest="image" />
              <Card.Body>
                <Card.Title datatest="name">
                  <Link to={`/channels/${id}`}>{name}</Link>
                </Card.Title>
                <Card.Text datatest="mediaType">
                 {mediaType}
                </Card.Text>
                <Card.Text datatest="description" className="text-truncate">{description}</Card.Text>
              </Card.Body>
            </Card>
            );
          })}
      </CardColumns>
    </Container>
  );
};

export default Channel;
