make: serve

node_modules:
	npm install

dist/server.js: node_modules
	npm run build

dist/out.html: dist/server.js
	npm --silent start > dist/out.html

server.out:
	go build -o server.out server.go

.PHONY: serve
serve: dist/out.html server.out
	./server.out