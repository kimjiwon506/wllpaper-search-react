import request from './request';

const BASE_URL = 'https://pixabay.com/api';

const defaultParams = {
    key: process.env.REACT_APP_PIXABAY,
};

// const example = {
//     q: 'sky',
// };

const getWallPapers = async (paramObj) => {
    const params = new URLSearchParams({
        ...defaultParams,
        ...paramObj,
        // ...example,
    }).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getWallPapers;
