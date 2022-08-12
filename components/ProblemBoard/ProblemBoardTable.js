import React from 'react';
import styled from 'styled-components';

const headerWidth = ["10%", "60%", "10%", "10%", "10%"];
const rankImage = {
    undefined: "/img/rank/0.svg",
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
    gold5: "/img/rank/11.svg",
    gold4: "/img/rank/12.svg",
    gold3: "/img/rank/13.svg",
    gold2: "/img/rank/14.svg",
    gold1: "/img/rank/15.svg",
    platinum5: "/img/rank/16.svg",
    platinum4: "/img/rank/17.svg",
    platinum3: "/img/rank/18.svg",
    platinum2: "/img/rank/19.svg",
    platinum1: "/img/rank/20.svg",
    diamond5: "/img/rank/21.svg",
    diamond4: "/img/rank/22.svg",
    diamond3: "/img/rank/23.svg",
    diamond2: "/img/rank/24.svg",
    diamond1: "/img/rank/25.svg",
    ruby5: "/img/rank/26.svg",
    ruby4: "/img/rank/27.svg",
    ruby3: "/img/rank/28.svg",
    ruby2: "/img/rank/29.svg",
    ruby1: "/img/rank/30.svg",
    master: "/img/rank/31.svg",
    sprout: "/img/rank/sprout.svg"
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
                    <img src={val.header.rank?rankImage[val.header.rank]:rankImage['undefined']}/></TbodyA></td>
                <td><TbodyA href={`${val.header.link}`}>{val.header.source}</TbodyA></td>
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
    color: black;
    img {
        width: 1.2em;
        height: 1.2em;
    }
`;