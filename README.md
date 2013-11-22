The website for the [wallboardr][https://wallboardr.io] project.

To build the site, you will need grunt, which you can get with `npm install`.

Running `grunt` alone will watch your files as you develop, and when you are ready, `grunt pack` will create a minified version of the site. The built version of the site lives in the `dist` folder.

Deployment is done with grunt as well, but you will need to set up certificates and whatnot with your own server. :)