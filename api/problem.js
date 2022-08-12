import {apiURI} from './apiURI';

export const getProblemAPI = async (id) => {
    try {
        const res = await fetch(apiURI + `/problem/${id}`);
        const json = await res.json();
        return json;
    } catch(e) {
        return e;
    }
};