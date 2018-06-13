# golang-react

A server-side React app, served in Go. Assuming this repo is in your [GOPATH](https://github.com/golang/go/wiki/GOPATH), or at least symlinked into it, you can build and run the entire application with a simple `make`. This will:

1. `npm install` dependencies
2. Server-side render the react app
3. Build the Golang server
4. Start the Golang server