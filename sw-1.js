importScripts('/node_modules/sw-toolbox/sw-toolbox.js');

version = 1;

toolbox.router.get('cached-file.js', toolbox.cacheFirst, {debug: true});
