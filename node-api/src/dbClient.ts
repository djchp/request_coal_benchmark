import cassandra from "cassandra-driver";

const client = new cassandra.Client({
    contactPoints: ["127.0.0.1"],
    localDataCenter: "datacenter1",
  });
  
export default client;