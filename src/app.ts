import express from "express";
import { Redis } from "ioredis";

const app = express();

const PORT = process.env.PORT || 3000;

// const redis = new Redis({
//   host: 'redis',
// });

const redis = new Redis({
  host: "redis",
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (error) => {
  console.log(error);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/redis", async (req, res) => {
  const keys = await redis.keys("*");
  const data = await Promise.all(
    keys.map(async (key) => {
      const value = await redis.get(key);
      return { [key]: value };
    })
  );
  res.send(data);
});

app.get("/redis/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const data = await redis.get(key);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/redis", async (req, res) => {
  try {
    const body = req.body;
    Object.keys(body).forEach(async (key) => {
      await redis.set(key, body[key]);
    });
    res.send("Data added successfully");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
