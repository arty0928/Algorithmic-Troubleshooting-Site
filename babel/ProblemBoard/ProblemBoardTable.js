import React from 'react';
const headerWidth = ["10%", "90%"];

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
  }, val.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: `/problem/${val.id}`
  }, val.content))))));
};

export default ProblemBoardTable;