import React from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setSort } from '../../actions/actions';

const Sidebar = ({ programsGroup }) => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setSort(programsGroup, e.target.value))
  }

  
  return (
    <Card>
      <Card.Header as="h5">Sidebar</Card.Header>
      <Card.Body>
        <Card.Title>Sort</Card.Title>
        <Form>
          <Form.Group controlId="sort">
            <Form.Control as="select" onChange={handleChange}>
              <option className="text-muted">Select</option>
              <option value="lengthMinutes-asc">Length (Low - High)</option>
              <option value="lengthMinutes-desc">Length (High - Low)</option>
              <option value="name-asc">Name (A - Z)</option>
              <option value="name-desc">Name (Z - A)</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
