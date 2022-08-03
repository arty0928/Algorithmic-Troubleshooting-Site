import React, {useEffect} from 'react';
import {getProblem} from '../../api/problem';

const ProblemTable = () => {
    useEffect(_=>{
        getProblem().then(res=>console.log(res));
    }, []);
    return <table>
        <thead></thead>
        <tbody></tbody>
    </table>;
};

export default ProblemTable;