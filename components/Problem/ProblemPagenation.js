import React from 'react';

const ProblemPagenation = ({pageNumber}) => {
    const listRendering = _=>{
        const list = [];
        for (let i = 1; i <= pageNumber; i++)
            list.push(<li key={i}><a href=''>{i}</a></li>);
        return list;
    };
    return <ul>{listRendering()}</ul>;
};

export default ProblemPagenation;