const axios = require('axios');

const generate = () => {
    const length = Math.floor(Math.random() * 3) + 1; 
    let id = '';
    for (let i = 0; i < length; i++) {
        id += Math.floor(Math.random() * 10); 
    }
    return `https://pointerpointer.com/images/${id}.jpg`;
}

const check = async (url) => {
    try {
        const res = await axios.get(url);
        const contentType = res.headers['content-type'];

        if (res.status === 200 && contentType.startsWith('image/')) {
            return url; 
        }
    } catch (error) {
        console.error(`Error URL: ${url}`, error.message);
    }
    return null; 
}

const runChecks = async () => {
    let found = null; 
    while (!found) {
        const url = generate(3);
        found = await check(url);
    }
    return found; 
};

module.exports = { check, generate, runChecks };
