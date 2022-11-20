const express = require("express");
const app = express(); //create new express app
const port = 5001; //using designated port number on front end to access back end
// run server on specific port(5001), and the front end/index on port(3000)

const { MongoClient } = require("mongodb"); //create a new mongoDB client
const url =
  "mongodb+srv://testUser:2N5Z4YTsPlrj3dd7@realmcluster.i9fux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

app.use(express.static("build")); //allows you to pass json data from front end to back end
app.use(express.urlencoded({ extended: true })); //allows you to access req.body

const cors = require("cors");
// cors is a pkg that lets you make request across different urls/different machines -- makes port 3000 talk with server.js port 3001

app.use(cors());

app.use(express.urlencoded({ extended: true })); //allows you to access req.body

{
  /* <!--  Start of sign up --> */
}
app.post("/users", (req, res) => {
  //establish credentials as user obj
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  //function to verify log-in data
  async function insertUser() {
    await client.connect();
    const collection = client.db("test_db").collection("users");
    await collection.insertOne(user);
    await client.close();
  }
  console.log(user);
  insertUser();
  res.redirect("/");
});

{
  /* <!--  Start of login --> */
}
app.post('/login', (req,res) => {

  let user = {
	email: req.body.email,
	password: req.body.password,
  } //establish credentials as user obj

  async function verifyUser() {
    await client.connect()
    const collection = client.db('test_db').collection('users')
    let findUser = await collection.findOne(user)
    await client.close()
    console.log(user)
	  if (findUser !== null) {
	    res.redirect("/")
	  } else {
	    res.redirect("/Login")
	  }
  }
    console.log(user)
  verifyUser()
})
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
      console.log(cursorArray);
      res.send(cursorArray);
      let DUPcursorArray = cursorArray.map((i) => i.split(",").map(i));
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


app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(port);