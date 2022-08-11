const {apiURI} = require('../../api/apiURI');
const axios = require('axios');

export const getProblemAPI = async (id) => {
    try {
        const res = await axios.get(apiURI + `/problem/${id}`);
        return res.data;
    } catch(e) {
        return e;
    }
};
