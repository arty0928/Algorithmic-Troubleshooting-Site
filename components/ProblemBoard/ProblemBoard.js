import React, {useState, useEffect} from 'react';
import {Routes, Route, useParams} from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server';
import ProblemBoardTable from './ProblemBoardTable';
import ProblemBoardPagination from './ProblemBoardPagination';
import {getProblemBoardAPI} from '../../api/problemBoard';

const ProblemBoard = () => {
    const {id} = useParams();
    const [problemBoardHeader, setProblemBoardHeader] = useState([]);
    const [problemBoardList, setProblemBoardList] = useState([]);
    const [problemBoardPageNumber, setProblemBoardPageNumber] = useState(0);
    useEffect(_=>{
        const pageId = id === undefined ? 1 : id;
        getProblemBoardAPI(pageId)
            .then(val=>{
                const [header, ...body] = val;
                setProblemBoardHeader(header.header);
                setProblemBoardList([...body]);
                setProblemBoardPageNumber(header.pageNumber);
            })
            .catch(e=>console.error('getProblemBoardAPI', e));
    }, [id]);
    return <div className="container">
            <ProblemBoardTable problemBoardHeader={problemBoardHeader} problemBoardList={problemBoardList}/>
            <ProblemBoardPagination problemBoardPageNumber={problemBoardPageNumber} id={id}/>
        </div>;
};

const ProblemBoardRouter = () => {
    return <Routes>
            <Route path="/" element={React.createElement(ProblemBoard)}/>
            <Route path="/:id" element={React.createElement(ProblemBoard)}/>
        </Routes>;
};

export default ProblemBoardRouter;