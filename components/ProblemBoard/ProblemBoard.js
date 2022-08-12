import React, {useState, useEffect} from 'react';
import {Routes, Route, useParams} from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server';
import ProblemBoardTable from './ProblemBoardTable';
import ProblemBoardPagination from './ProblemBoardPagination';
import ProblemRegisterButton from './ProblemRegisterButton';
import {getProblemBoardAPI} from '../../api/problemBoard';
import styled from 'styled-components';

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
            <DivStyled>
                <div className="left"><ProblemRegisterButton/></div>
                <div className="middle"><ProblemBoardPagination problemBoardPageNumber={problemBoardPageNumber} id={id}/></div>
                <div className="right"></div>
            </DivStyled>  
        </div>;
};

const ProblemBoardRouter = () => {
    return <Routes>
            <Route path="/" element={React.createElement(ProblemBoard)}/>
            <Route path="/:id" element={React.createElement(ProblemBoard)}/>
        </Routes>;
};

export default ProblemBoardRouter;

const DivStyled = styled.div`
    display: flex;
    div {
        flex: 1;
    }
`;
