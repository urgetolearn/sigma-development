const express = require("express");
const app = express();
const port = 3000;

//router
const blog = require("./routes/blog");
const shop = require("./routes/shop");
app.use("/shop",shop)


app.use("/blog", blog);
app.use(express.static("public"));

//to make post request

// app.get("/shaan", (req, res) => {
//   console.log("this is a get request");
//   res.send("Shaan is a good boy!");
// });
app.get("/", (req, res) => {
  console.log("this is a get request");
  res.send("Hello World22!");
})
app.post("/", (req, res) => {
  console.log("this is a post request");
  res.send("Hello World!");
}).put("/", (req, res) => {
  console.log("this is a put request");
  res.send("Hello World!");

})
app.get("/index", (req,res)=>{
    console.log("ok");
    res.sendFile("templates/index.html",{root:__dirname})
})

app.get("/api", (req, res) => {
  console.log("ok");
  res.json({a:1, b:2, c:3, d:4, name:["chinmayi"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
