import request from './request';

const BASE_URL = 'https://pixabay.com/api';

const defaultParams = {
    key: process.env.REACT_APP_PIXABAY,
};

const getWallPapers = async () => {
    const params = URLSearchParams(defaultParams).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getWallPapers;
