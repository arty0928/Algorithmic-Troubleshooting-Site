import React, { useState, useEffect } from 'react';
import ProblemBoardTable from './ProblemBoardTable';
import ProblemBoardPagenation from './ProblemBoardPagenation';
import { getProblemAPI } from '../../api/problem';

const ProblemBoard = () => {
  const [problemBoardHeader, setProblemBoardHeader] = useState([]);
  const [problemBoardList, setProblemBoardList] = useState([]);
  const [problemBoardPageNumber, setProblemBoardPageNumber] = useState(0);
  useEffect(_ => {
    getProblemAPI().then(val => {
      const [header, ...body] = val;
      setProblemBoardHeader(header.header);
      setProblemBoardList([...problemBoardList, ...body]);
      setProblemBoardPageNumber(header.pageNumber);
    }).catch(e => console.error('getProblemAPI', e));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProblemBoardTable, {
    problemBoardHeader: problemBoardHeader,
    problemBoardList: problemBoardList
  }), /*#__PURE__*/React.createElement(ProblemBoardPagenation, {
    problemBoardPageNumber: problemBoardPageNumber
  }));
};

export default ProblemBoard;