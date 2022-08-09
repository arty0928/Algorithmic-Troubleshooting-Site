import React from 'react';
const headerWidth = ["10%", "60%", "10%", "10%", "10%"];

const ProblemBoardTable = ({
  problemBoardHeader,
  problemBoardList
}) => {
  return /*#__PURE__*/React.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, problemBoardHeader.map((val, index) => /*#__PURE__*/React.createElement("td", {
    key: index,
    style: {
      width: headerWidth[index],
      fontWeight: "bold"
    }
  }, val)))), /*#__PURE__*/React.createElement("tbody", null, problemBoardList.map((val, index) => /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.id)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.header.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.header.rank)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.header.source)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.header.problemId))))));
};

export default ProblemBoardTable;