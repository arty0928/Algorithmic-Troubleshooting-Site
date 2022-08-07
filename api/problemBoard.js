import {apiURI} from './apiURI';

export const getProblemBoardAPI = async () => {
    try {
        const res = await fetch(apiURI + "/problem");
        const json = await res.json();
        return json;
    } catch(e) {
        return e;
    }
};