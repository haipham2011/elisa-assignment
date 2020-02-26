import React from "react";
import { Table } from "react-bootstrap";

const ProgramsContainer = ({programsGroup, maxNumberOfProgram, page}) => {
  
  return (
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Channel</th>
                <th>Start (Date - Time)</th>
                <th>End (Date - Time)</th>
                <th>Length (min)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {programsGroup
                .slice(
                  maxNumberOfProgram * (page - 1),
                  maxNumberOfProgram * page
                )
                .map((element, index) => {
                  const {
                    name,
                    channel,
                    startTime,
                    endTime,
                    lengthMinutes,
                    shortDescription
                  } = element;
                  return (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{channel.name}</td>
                      <td>{startTime}</td>
                      <td>{endTime}</td>
                      <td>{lengthMinutes}</td>
                      <td>{shortDescription}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
  );
};

export default ProgramsContainer;
