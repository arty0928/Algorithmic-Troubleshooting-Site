import React from 'react';

const headerWidth = ["10%", "90%"];

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
                <td><a href={`/problem/${val.id}`}>{val.title}</a></td>
                <td><a href={`/problem/${val.id}`}>{val.content}</a></td>
            </tr>
        )}</tbody>
    </table>;
};

export default ProblemBoardTable;