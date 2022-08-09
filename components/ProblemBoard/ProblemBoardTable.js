import React from 'react';

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
                <td key={index} style={{width: headerWidth[index], fontWeight: "bold"}}>{val}</td>
            )}    
            </tr>
        </thead>
        <tbody>{problemBoardList.map((val, index)=>
            <tr key={index}>
                <td><a href={`/problem/${val.id}`}>{val.id}</a></td>
                <td><a href={`/problem/${val.id}`}>{val.header.title}</a></td>
                <td><a href={`/problem/${val.id}`}>
                    <img src={rankImage[val.header.rank]} style={{width: "1.2em", height: "1.2em"}}/></a></td>
                <td><a href={`/problem/${val.id}`}>{val.header.source}</a></td>
                <td><a href={`/problem/${val.id}`}>{val.header.problemId}</a></td>
            </tr>
        )}</tbody>
    </table>;
};

export default ProblemBoardTable;