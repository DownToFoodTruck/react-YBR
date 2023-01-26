import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(path.join(process.cwd(), ".env")) });
import express from "express";
const app = express(); //create new express app
const port = process.env.PORT; //using designated port number on front end to access back end
// run server on specific port(5001), and the front end/index on port(3000)

import { MongoClient } from "mongodb"; //create a new mongoDB client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

app.use(express.static("dist")); //allows you to pass json data from front end to back end
app.use(express.urlencoded({ extended: true })); //allows you to access req.body
app.use(express.json());

import cors from "cors";

// cors is a pkg that lets you make request across different urls/different machines -- makes port 3000 talk with server.js port 3001

app.use(cors());

{
  /* <!--  Start of sign up --> */
}
app.post("/register", (req, res) => {
  //establish credentials as user obj
  let user = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
  console.log(user);
  //function to verify log-in data
  async function insertUser() {
    await client.connect();
    const collection = client.db("test_db").collection("users");
    await collection.insertOne(user);
    await client.close();
  }

  console.log("backend");
  insertUser();
  res.redirect("/");
});

{
  /* <!--  Start of login --> */
}
app.post("/login", (req, res) => {
  let user = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  }; //establish credentials as user obj

  async function verifyUser() {
    await client.connect();
    const collection = client.db("test_db").collection("users");
    let findUser = await collection.findOne(user);
    await client.close();
    console.log(user);
    if (findUser !== null) {
      res.redirect("/");
    } else {
      res.redirect("/Login");
    }
  }
  console.log(user);
  verifyUser();
});
{
  /* <!--  End of login --> */
}

{
  /* <!--   Start tag query. Dynamically populates the selection dropdown --> */
}
app.get("/apiTAG", (req, res) => {
  async function getTags() {
    await client.connect();
    const collection = client.db("YBR").collection("PROD4");

    let cursorArray = await collection.distinct("Tags");

    cursorArray = cursorArray.map((i) => i.split(","));
    cursorArray = Array.from(new Set(cursorArray.flat(1)));
    // cursorArray = Array.from(new Set(cursorArray));
    await client.close();

    if (cursorArray !== null) {
      // console.log(cursorArray);
      res.send(cursorArray);
      // let DUPcursorArray = cursorArray.map((i) => i.split(",").map(i));
    } else {
      console.log("error");
      res.sendStatus(400);
    }
  }

  getTags();
});
{
  /* <!--   End tag query --> */
}

{
  /* <!--   //Query mongo for tag (case insensitive) selected --> */
}

app.get("/api", function (req, res) {
  const tag = req.query.tag;
  async function getSupplies() {
    try {
      await client.connect();
      const collection = client.db("YBR").collection("PROD4");
      const cursorArray = await collection
        .find({
          Tags: {
            $regex: tag,
            $options: "i",
          },
        })
        .sort({
          Name: 1,
        })
        .toArray();

      res.send(cursorArray);
    } catch (err) {
      res.sendStatus(400);
      console.log(err);
    }
  }
  getSupplies(tag);
});

{
  /* <!--   End individual tag query --> */
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.join("dist", "index.html")));
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
