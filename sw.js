importScripts('node_modules/sw-toolbox/sw-toolbox.js');

toolbox.router.get('*.js', toolbox.cacheFirst);
