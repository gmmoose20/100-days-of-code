const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const fs          = require('fs');

const app = express();

app.use(bodyParser.json());

/**
 * Reading File
 */
app.get('/api/all', (req,res) => {
    res.setHeader('Contet-Type', 'application/json');
    
    fs.readFile(path.join(__dirname, 'feed.json'), 'utf8', (err,json) => {
        res.send(json);

    });  
});

/**
 * Adding post
 */
app.post('/api/add', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    let postData = req.body;

    fs.readFile(path.join(__dirname, 'feed.json'), 'utf8', (err,json) => {
        let posts = JSON.parse(json);
        posts.push(postData);
        
        fs.writeFile(path.join(__dirname, 'feed.json'), JSON.stringify(posts), (e) => {
            if (e) throw e;

            console.log('Wrote file');
            res.send({msg: 'Wrote File'});
        });
    }); 

});

/**
 * Updating Posts
 */
app.post('/api/update', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    let newPost = req.body;

    fs.readFile(path.join(__dirname, 'feed.json'), 'utf8', (err,json) => {
        let posts = JSON.parse(json);
      

        posts.forEach(post => {
            if (post.id == newPost.id) {
                post.id = newPost.id;
                post.title = newPost.title;
                post.body = newPost.body;
            } else {
                console.log('ID doesn\'t match');
            }
        });


      
        fs.writeFile(path.join(__dirname, 'feed.json'), JSON.stringify(posts), (e) => {
            if (e) throw e;

            console.log('Updated post');
            res.send({msg: 'Updated Post'});
        });
    }); 

});

/**
 * Removing Posts
 */
app.post('/api/remove', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    let postId = req.body.id;

    fs.readFile(path.join(__dirname, 'feed.json'), 'utf8', (err,json) => {
        let posts = JSON.parse(json);
    

        posts.forEach((post,i) => {
            if (post.id == postId) {
                posts.splice(i,1);
            } else {
                console.log('ID doesn\'t match');
            }
        });


    
        fs.writeFile(path.join(__dirname, 'feed.json'), JSON.stringify(posts), (e) => {
            if (e) throw e;

            console.log('Removed Post');
            res.send({msg: 'Removed Post'});
        });
    }); 

});

// Running the server
app.listen(3000, (e) => {
    if(e) throw e;
    console.log('Server has started on port 3000...');
});