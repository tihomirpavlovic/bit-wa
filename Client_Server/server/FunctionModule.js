const loremIpsum = require('lorem-ipsum');
const Post = require("./dataModule.js")

function createTitle() {
    return loremIpsum({
        count: 3,
        units: 'word'
    });
}

function createLead() {
    return loremIpsum({
        count: 3,
        units: 'sentences'
    });
}


function createPost(num) {
    const posts = [];
    for (let i = 0; i < num; i++) {
        const title = createTitle();
        const lead = createLead();
        const post = new Post(title, lead)
        posts.push(post);
    }
    return posts;
}


module.exports = createPost;