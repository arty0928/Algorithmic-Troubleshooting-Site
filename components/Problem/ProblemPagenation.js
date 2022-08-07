import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const ProblemPagenation = ({pageNumber}) => {
    const listRendering = _=>{
        const list = [];
        for (let i = 1; i <= pageNumber; i++)
            list.push(<Pagination.Item key={i} href='/'>{i}</Pagination.Item>);
        return list;
    };
    return <Pagination>{listRendering()}</Pagination>;
};

export default ProblemPagenation;