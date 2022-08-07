import apiURI from './apiURI';

export const getProblemAPI = async () => {
    try {
        const res = await fetch(apiURI + "/problem");
        const json = await res.json();
        return json;
    } catch(e) {
        return e;
    }
};