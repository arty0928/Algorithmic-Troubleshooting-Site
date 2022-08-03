import {apiURI} from './api';

export const getProblem = async () => {
    try {
        return await (await fetch(apiURI + "/problem")).text();
    } catch(e) {
        return e;
    }
};