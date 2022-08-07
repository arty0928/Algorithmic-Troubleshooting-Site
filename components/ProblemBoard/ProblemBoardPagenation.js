import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const ProblemBoardPagenation = ({problemBoardPageNumber}) => {
    const listRendering = _=>{
        const list = [];
        for (let i = 1; i <= problemBoardPageNumber; i++)
            list.push(<Pagination.Item key={i} href={`/problem/${i}`}>{i}</Pagination.Item>);
        return list;
    };
    return <Pagination>{listRendering()}</Pagination>;
};

export default ProblemBoardPagenation;