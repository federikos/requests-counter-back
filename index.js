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
  if (req.url === "/requests_info") {
    res.end(JSON.stringify(mockTableData));
  }
  console.log("some request");
});

app.listen(3003, () => {
  console.log('the server is running');
});