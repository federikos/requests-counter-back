import { createServer } from "http";
import { getIp, getBrowser } from "./lib/headerParsers.js";

const app = createServer();

const mockTableData = {};

app.on("request", (req, res) => {
  if (req.url === "/requests_info") {
    console.log(req.headers)
    const ip = getIp(req.headers);
    const browser = getBrowser(req.headers);

    if (Array.isArray(mockTableData[ip])) {
      const clientObj = Array.from(mockTableData[ip]).find(({ client }) => client == browser);

      if (clientObj) {
        clientObj.count++;
      } else {
        mockTableData[ip].push({
          client: browser,
          datetime: new Date(),
          count: 1
        })
      }

    } else {
      mockTableData[ip] = [
        {
          client: browser,
          datetime: new Date(),
          count: 1
        }
      ]
    }
    res.end(JSON.stringify(mockTableData));
  }

  if (req.url === "/reset") {
    Object.keys(mockTableData).forEach(key => delete mockTableData[key]);
    res.writeHead(200);
    res.end();
  }
});

app.listen(3003, () => {
  console.log('the server is running');
});