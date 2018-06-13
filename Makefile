make: dist/out.html

node_modules:
	npm install

dist/server.js: node_modules
	npm run build

dist/out.html: dist/server.js
	npm --silent start > dist/out.html