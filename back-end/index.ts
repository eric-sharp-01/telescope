import path from 'path';
import express from "express";
import fs from 'fs';
import https from 'https';
import tradesController from './routers/trades';

const app = express();
const port = 30600; // default port to listen

// define a route handler for the default home page
app.get(["/", "/home"], (req: any, res: any) => {
  res.sendFile(path.join(__dirname+'/../static/index.html'));
});

app.use('/api/trades', tradesController);
app.use(express.static(path.join(__dirname + '/../static')));
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${port}` );
});
https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(80, () => {
    console.log(`server started at https://localhost`);
  });