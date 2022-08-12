import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import ProblemBoardTable from './ProblemBoardTable';
import ProblemBoardPagination from './ProblemBoardPagination';
import ProblemRegisterButton from './ProblemRegisterButton';
import { getProblemBoardAPI } from '../../api/problemBoard';
import styled from 'styled-components';

const ProblemBoard = () => {
  const {
    id
  } = useParams();
  const [problemBoardHeader, setProblemBoardHeader] = useState([]);
  const [problemBoardList, setProblemBoardList] = useState([]);
  const [problemBoardPageNumber, setProblemBoardPageNumber] = useState(0);
  useEffect(_ => {
    const pageId = id === undefined ? 1 : id;
    getProblemBoardAPI(pageId).then(val => {
      const [header, ...body] = val;
      setProblemBoardHeader(header.header);
      setProblemBoardList([...body]);
      setProblemBoardPageNumber(header.pageNumber);
    }).catch(e => console.error('getProblemBoardAPI', e));
  }, [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(ProblemBoardTable, {
    problemBoardHeader: problemBoardHeader,
    problemBoardList: problemBoardList
  }), /*#__PURE__*/React.createElement(DivStyled, null, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(ProblemRegisterButton, null)), /*#__PURE__*/React.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/React.createElement(ProblemBoardPagination, {
    problemBoardPageNumber: problemBoardPageNumber,
    id: id
  })), /*#__PURE__*/React.createElement("div", {
    className: "right"
  })));
};

const ProblemBoardRouter = () => {
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(ProblemBoard)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/:id",
    element: /*#__PURE__*/React.createElement(ProblemBoard)
  }));
};

export default ProblemBoardRouter;
const DivStyled = styled.div`
    display: flex;
    div {
        flex: 1;
    }
`;