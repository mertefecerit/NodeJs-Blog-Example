const axios = require('axios');

const getPost = async (id) => {
    return await axios.get('https://api.example.com/v2/posts/'+id);
}

const getPosts = async (pagination) => {
    if(pagination){
        return await axios.get(`https://api.example.com/v2/posts?per_page=20&${pagination}`);
    }
    return await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20');
}

const searchPost = async (param) => {
    return await axios.get(`https://api.example.com/v2/posts?search=${param}`);
}

module.exports = {
    getPost,
    getPosts,
    searchPost
}