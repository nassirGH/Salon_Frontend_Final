require('babel-register');
 
const router = require('./src/App').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://thairpysalonandspa.ca/')
        .save('./public/sitemap.xml')
);