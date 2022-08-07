import React from 'react';
import Table from 'react-bootstrap/Table';

const ProblemBoardTable = ({
  problemBoardHeader,
  problemBoardList
}) => {
  return /*#__PURE__*/React.createElement(Table, {
    bordered: true
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, problemBoardHeader.map((val, index) => /*#__PURE__*/React.createElement("td", {
    key: index
  }, val)))), /*#__PURE__*/React.createElement("tbody", null, problemBoardList.map((val, index) => /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.content))))));
};

export default ProblemBoardTable;