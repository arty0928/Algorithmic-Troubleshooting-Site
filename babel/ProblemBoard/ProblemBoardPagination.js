import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProblemBoardPagenation = ({
  problemBoardPageNumber,
  id
}) => {
  const listRendering = _ => {
    const list = [];
    const pageId = id === undefined ? 1 : Number(id);

    for (let i = 1; i <= problemBoardPageNumber; i++) {
      const classname = i !== pageId ? "page-item" : "page-item active";
      list.push( /*#__PURE__*/React.createElement("li", {
        className: classname,
        key: i
      }, /*#__PURE__*/React.createElement(Link, {
        className: "page-link",
        to: `/${i}`
      }, i)));
    }

    return list;
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: "pagination justify-content-center"
  }, listRendering());
};

export default ProblemBoardPagenation;