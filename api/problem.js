import {apiURI} from './api';
const problemApiURI = apiURI + "/problem";

export const getProblem = async () => {
    try {
        return await (await fetch(problemApiURI)).text();
    } catch(e) {
        return e;
    }
};