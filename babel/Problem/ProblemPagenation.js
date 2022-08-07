import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const ProblemPagenation = ({
  pageNumber
}) => {
  const listRendering = _ => {
    const list = [];

    for (let i = 1; i <= pageNumber; i++) list.push( /*#__PURE__*/React.createElement(Pagination.Item, {
      key: i,
      href: `/problem/${i}`
    }, i));

    return list;
  };

  return /*#__PURE__*/React.createElement(Pagination, null, listRendering());
};

export default ProblemPagenation;