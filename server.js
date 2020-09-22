const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// restream parsed body before proxying
var restream = function (proxyReq, req, res, options) {
  if (req.body) {
    let bodyData = JSON.stringify(req.body);
    // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
    proxyReq.setHeader("Content-Type", "application/json");
    proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
    // stream the content
    proxyReq.write(bodyData);
  }
};

const apiPaths = {
  "/api": {
    target: "https://localhost:5001",
    pathRewrite: {
      "^/api": "/",
    },
    changeOrigin: true,
    onProxyReq: restream,
    secure: false,
  },
};

const isDevelopment = process.env.NODE_ENV !== "production";

app
  .prepare()
  .then(() => {
    const server = express();

    if (isDevelopment) {
      // server.use("/api", createProxyMiddleware(apiPaths["/api"]));
      server.use(
        createProxyMiddleware("/api", {
          target: "https://localhost:5001",
          // pathRewrite: { "^/api": "/api" },
          changeOrigin: true,
          secure: false,
        })
      );
    }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error:::::", err);
  });
