import { createServer } from "http";

const app = createServer();

const mockTableData = {
  '192.168.1.1': [
    {
      client: "Chrome",
      datetime: new Date(),
      count: 1
    },
    {
      client: "Edge",
      datetime: new Date(),
      count: 2
    },
    {
      client: "Safari",
      datetime: new Date(),
      count: 5
    }
  ],
  '127.0.0.1': [
    {
      client: "Chrome",
      datetime: new Date(),
      count: 5
    },
    {
      client: "Firefox",
      datetime: new Date(),
      count: 2
    },
  ]
}

app.on("request", (req, res) => {
  req.m
  if (req.url === "/") {
    res.writeHead(200, {
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000,
    })
    res.end(JSON.stringify(mockTableData));
  }
  console.log("some request");
});

app.listen(3003, () => {
  console.log('the server is running');
});