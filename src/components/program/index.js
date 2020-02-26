import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPrograms } from "../../actions/actions";
import { Container, Pagination, Row, Col } from "react-bootstrap";
import Sidebar from './Sidebar';
import ProgramsContainer from './ProgramsContainer';
import PageControl from './PageControl';
import { roundNumber, usePage } from './functions';

const Program = () => {
  const { programsGroup } = useSelector(state => state.programs);
  const dispatch = useDispatch();
  const maxNumberOfProgram = 5;
  const maxNumberOfPage = 5;
  const totalPage = roundNumber(programsGroup.length, maxNumberOfProgram);
  const { page, bound, pageBoundCal} = usePage(maxNumberOfPage, totalPage);

  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  return (
    <Container className="mw-100">
      <Row>
        <Col sm={3}><Sidebar {...{ programsGroup }}/></Col>
        <Col sm={9}>
            <ProgramsContainer {...{programsGroup, maxNumberOfProgram, page}} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Pagination>
          <Pagination.First
            disabled={page === 1}
            onClick={() => {
              pageBoundCal(1);
            }}
          />
          <Pagination.Prev
            disabled={page === 1}
            onClick={() => {
              pageBoundCal(page - 1);
            }}
          />
          <PageControl {...{page, bound, pageBoundCal}}/>
          <Pagination.Next
            disabled={page === totalPage}
            onClick={() => {
              pageBoundCal(page + 1);
            }}
          />
          <Pagination.Last
            disabled={page === totalPage}
            onClick={() => {
              pageBoundCal(totalPage);
            }}
          />
        </Pagination>
      </Row>
    </Container>
  );
};

export default Program;
