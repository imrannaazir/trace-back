/* eslint-disable no-console */
import app from "./app";
import config from "./app/config";
import colors from "colors";
import { Server } from "http";

let server: Server;
async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(
        colors.green.bold(`App is listening on port: `),
        colors.yellow.bold(`${config.port}`),
      );
    });
  } catch (error) {
    console.log(error);
  }
}

// if got unhandled rejection close server
process.on("unhandledRejection", (error) => {
  console.log(
    colors.red.bold(`⚠️ unhandled rejection detected, shutting down..`),
    error,
  );

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// if got unhandled exception
process.on("uncaughtException", (error) => {
  console.log(
    colors.red.bold(`⚠️ unhandled exception detected, shutting down..`),
    error,
  );

  process.exit(1);
});
main();
