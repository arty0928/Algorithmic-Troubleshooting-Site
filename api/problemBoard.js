import {apiURI} from './apiURI';

export const getProblemBoardAPI = async (id) => {
    try {
        const res = await fetch(apiURI + `/problemBoard/${id}`);
        const json = await res.json();
        return json;
    } catch(e) {
        return e;
    }
};