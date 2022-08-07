import React from 'react';
import Table from 'react-bootstrap/Table';

const ProblemBoardTable = ({problemBoardHeader, problemBoardList}) => {
    return <Table bordered>
        <thead>
            <tr>{problemBoardHeader.map((val, index)=>
                <td key={index}>{val}</td>
            )}    
            </tr>
        </thead>
        <tbody>{problemBoardList.map((val, index)=>
            <tr key={index}>
                <td><a href={`/problem/${val.id}`}>{val.title}</a></td>
                <td><a href={`/problem/${val.id}`}>{val.content}</a></td>
            </tr>
        )}</tbody>
    </Table>;
};

export default ProblemBoardTable;