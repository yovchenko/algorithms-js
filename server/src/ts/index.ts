import moment from "moment";
import http from "http";
import path from "path";
import express from "express";
import { Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";
import expressSession from "express-session";
import { router } from "./routes/routes";

const app = express();

/**
 * Module middleware.
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../../../dist/client")));
app.use("/api", router);

app.use(function(err: Error, req: Request, res: Response) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string): string | number | boolean {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server and listen on the provided port
 */

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});

// Handle server errors
server.on("error", (error: { syscall: string; code: string }) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      console.log(error);
  }
});
