import React from 'react';

const ProblemTable = ({
  problemHeader,
  problemList
}) => {
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, problemHeader.map((val, index) => /*#__PURE__*/React.createElement("td", {
    key: index
  }, val)))), /*#__PURE__*/React.createElement("tbody", null, problemList.map((val, index) => /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, val.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, val.content))))));
};

export default ProblemTable;