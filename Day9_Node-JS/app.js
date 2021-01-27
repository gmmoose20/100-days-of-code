const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    /**
     * Static Folder
     */
    // res.sendFile(path.join(__dirname, '/views/home.html'));
 
    /**
   * Dynamic Folder
   */
    res.render('index',{
        title: 'GM AWESOME'
    });
});

app.get('/about', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    /**
   * Static Folder
   */
    // res.sendFile(path.join(__dirname, '/views/about.html'));

    /**
 * Dynamic Folder
 */
    res.render('about',{
        title: 'AWESOME ABOUT'
    });
});

app.listen(3000, (e) => {
    if(e) throw e;
    console.log('Server is running on port 3000');
});