importScripts('/node_modules/sw-toolbox/sw-toolbox.js');

version = 2;

toolbox.router.get('cached-file.js', toolbox.networkFirst, {debug: true});
