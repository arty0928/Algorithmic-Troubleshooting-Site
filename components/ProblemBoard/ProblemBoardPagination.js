import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProblemBoardPagenation = ({problemBoardPageNumber, id}) => {
    const listRendering = _=>{
        const list = [];
        const pageId = id === undefined ? 1 : Number(id);
        for (let i = 1; i <= problemBoardPageNumber; i++) {
            const classname = i !== pageId ? "page-item" : "page-item active";
            list.push(<li className={classname} key={i}><Link className="page-link" to={`/${i}`}>{i}</Link></li>);
        }
        return list;
    };
    return <ul className="pagination justify-content-center">{listRendering()}</ul>;
};

export default ProblemBoardPagenation;