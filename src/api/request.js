const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
        }
        const errorData = await response.json();
        throw errorData;
    } catch (e) {
        console.log(e);
    }
};
export default request;
