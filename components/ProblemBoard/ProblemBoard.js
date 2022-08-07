import React, {useState, useEffect} from 'react';
import ProblemBoardTable from './ProblemBoardTable';
import ProblemBoardPagenation from './ProblemBoardPagenation';
import {getProblemBoardAPI} from '../../api/problemBoard';

const ProblemBoard = () => {
    const [problemBoardHeader, setProblemBoardHeader] = useState([]);
    const [problemBoardList, setProblemBoardList] = useState([]);
    const [problemBoardPageNumber, setProblemBoardPageNumber] = useState(0);
    useEffect(_=>{
        getProblemBoardAPI()
            .then(val=>{
                const [header, ...body] = val;
                setProblemBoardHeader(header.header);
                setProblemBoardList([...problemBoardList, ...body]);
                setProblemBoardPageNumber(header.pageNumber);
            })
            .catch(e=>console.error('getProblemBoardAPI', e));
    }, []);
    return <>
            <ProblemBoardTable problemBoardHeader={problemBoardHeader} problemBoardList={problemBoardList}/>
            <ProblemBoardPagenation problemBoardPageNumber={problemBoardPageNumber}/>
        </>;
};

export default ProblemBoard;