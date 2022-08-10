import React from 'react';
import styled from 'styled-components';
const headerWidth = ["10%", "60%", "10%", "10%", "10%"];
const rankImage = {
  bronze5: "/img/rank/1.svg",
  bronze4: "/img/rank/2.svg",
  bronze3: "/img/rank/3.svg",
  bronze2: "/img/rank/4.svg",
  bronze1: "/img/rank/5.svg",
  silver5: "/img/rank/6.svg",
  silver4: "/img/rank/7.svg",
  silver3: "/img/rank/8.svg",
  silver2: "/img/rank/9.svg",
  silver1: "/img/rank/10.svg"
};

const ProblemBoardTable = ({
  problemBoardHeader,
  problemBoardList
}) => {
  return /*#__PURE__*/React.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, problemBoardHeader.map((val, index) => /*#__PURE__*/React.createElement(TheadTd, {
    key: index,
    index: index
  }, val)))), /*#__PURE__*/React.createElement("tbody", null, problemBoardList.map((val, index) => /*#__PURE__*/React.createElement("tr", {
    key: index
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TbodyA, {
    href: `/problem/${val.id}`
  }, val.id)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TbodyA, {
    href: `/problem/${val.id}`
  }, val.header.title)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TbodyA, {
    href: `/problem/${val.id}`
  }, /*#__PURE__*/React.createElement("img", {
    src: rankImage[val.header.rank]
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TbodyA, {
    href: `/problem/${val.id}`
  }, val.header.source)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TbodyA, {
    href: `/problem/${val.id}`
  }, val.header.problemId))))));
};

export default ProblemBoardTable;
const TheadTd = styled.td`
    width: ${props => headerWidth[props.index]};
    font-weight: bold;
`;
const TbodyA = styled.a`
    text-decoration: none;
    color: black;
    img {
        width: 1.2em;
        height: 1.2em;
    }
`;