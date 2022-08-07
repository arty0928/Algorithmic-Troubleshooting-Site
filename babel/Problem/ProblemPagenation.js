import React from 'react';

const ProblemPagenation = ({
  pageNumber
}) => {
  const listRendering = _ => {
    const list = [];

    for (let i = 1; i <= pageNumber; i++) list.push( /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: ""
    }, i)));

    return list;
  };

  return /*#__PURE__*/React.createElement("ul", null, listRendering());
};

export default ProblemPagenation;