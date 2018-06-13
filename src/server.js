import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { render } from 'react-dom';
import App from './app';

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  const body = renderToString(<App />);
  res.send(body);
});

server.listen(port);
console.log(`Running server on port ${port}`)