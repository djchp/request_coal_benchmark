import app from "./app";
import config from "./config";
import client from "../src/dbClient";

app.listen(config.port, () => {
  client
    .connect()
    .then(() => {
      console.log("Connected to ScyllaDB");
    })
    .catch((err) => {
      console.error("Error connecting to ScyllaDB", err);
    });
    
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`
  );
});
