import React, {useState, useEffect} from 'react';
import {getProblemAPI} from '../../api/problem';

const ProblemTable = () => {
    const [problem, setProblem] = useState([]);
    useEffect(_=>{
        getProblemAPI()
            .then(val=>{setProblem( [...problem, ...val] );})
            .catch(console.error);
    }, []);
    return <table>
        <thead></thead>
        <tbody>{problem.map((val, index)=>
            <tr key={index}>
                <td><a>{val.title}</a></td>
                <td><a>{val.content}</a></td>
            </tr>
        )}</tbody>
    </table>;
};

export default ProblemTable;