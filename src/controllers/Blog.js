const httpStatus = require('http-status');
const {getPosts, getPost, searchPost} = require('../services/Blog');

const search = (req, res) => {
    searchPost(req.body.search).then(response => {
        res.render('post/index',{
            posts:response.data
        });
    })
    .catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            errorMessage: error
        })
    });
}

const index = (req, res) => {
    let pagination = "";
    let currentPage = 1;

    if(req.query.page){
        pagination = "page=" + req.query.page;
        currentPage = req.query.page;
    }

    getPosts(pagination).then(response => {
        res.render('post/index',{
            posts:response.data,
            headers: response.headers,
            currentPage
        });
    })
    .catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            errorMessage: error
        })
    });
}

const read = (req, res) => {
    getPost(req.params.id).then(response => {
        res.render('post/post',{
            post:response.data
        });
    })
    .catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            errorMessage: error
        })
    }); 
}

module.exports = {
    index,
    read,
    search
}