import React, { useState, useEffect } from 'react';
import { getProblemAPI } from '../../api/problem';

const ProblemTable = () => {
  const [problem, setProblem] = useState([]);
  useEffect(_ => {
    getProblemAPI().then(val => {
      setProblem([...problem, ...val]);
    }).catch(console.error);
  }, []);
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null), /*#__PURE__*/React.createElement("tbody", null, problem.map((val, index) => /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", null, val.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", null, val.content))))));
};

export default ProblemTable;