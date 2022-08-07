import React, { useState, useEffect } from 'react';
import ProblemTable from './ProblemTable';
import ProblemPagenation from './ProblemPagenation';
import { getProblemAPI } from '../../api/problem';

const Problem = () => {
  const [problemHeader, setProblemHeader] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(_ => {
    getProblemAPI().then(val => {
      const [header, ...body] = val;
      setProblemHeader(header.header);
      setProblemList([...problemList, ...body]);
      setPageNumber(header.pageNumber);
    }).catch(e => console.error('getProblemAPI', e));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProblemTable, {
    problemHeader: problemHeader,
    problemList: problemList
  }), /*#__PURE__*/React.createElement(ProblemPagenation, {
    pageNumber: pageNumber
  }));
};

export default Problem;