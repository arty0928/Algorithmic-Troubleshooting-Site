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
    silver1: "/img/rank/10.svg",
};

const ProblemBoardTable = ({problemBoardHeader, problemBoardList}) => {
    return <table className="table table-bordered">
        <thead>
            <tr>{problemBoardHeader.map((val, index)=>
                <TheadTd key={index} index={index}>{val}</TheadTd>
            )}    
            </tr>
        </thead>
        <tbody>{problemBoardList.map((val, index)=>
            <tr key={index}>
                <td><TbodyA href={`/problem/${val.id}`}>{val.id}</TbodyA></td>
                <td><TbodyA href={`/problem/${val.id}`}>{val.header.title}</TbodyA></td>
                <td><TbodyA href={`/problem/${val.id}`}>
                    <img src={rankImage[val.header.rank]}/></TbodyA></td>
                <td><TbodyA href={`/problem/${val.id}`}>{val.header.source}</TbodyA></td>
                <td><TbodyA href={`/problem/${val.id}`}>{val.header.problemId}</TbodyA></td>
            </tr>
        )}</tbody>
    </table>;
};

export default ProblemBoardTable;

const TheadTd = styled.td`
    width: ${(props)=>headerWidth[props.index]};
    font-weight: bold;
`;

const TbodyA = styled.a`
    text-decoration: none;
    img {
        width: 1.2em;
        height: 1.2em;
    }
`;