import React from 'react';

const ProblemTable = ({problemHeader, problemList}) => {
    return <table>
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
    </table>;
};

export default ProblemTable;