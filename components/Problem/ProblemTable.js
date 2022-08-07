import React from 'react';
import Table from 'react-bootstrap/Table';

const ProblemTable = ({problemHeader, problemList}) => {
    return <Table bordered>
        <thead>
            <tr>{problemHeader.map((val, index)=>
                <td key={index}>{val}</td>
            )}    
            </tr>
        </thead>
        <tbody>{problemList.map((val, index)=>
            <tr key={index}>
                <td><a href=''>{val.title}</a></td>
                <td><a href=''>{val.content}</a></td>
            </tr>
        )}</tbody>
    </Table>;
};

export default ProblemTable;