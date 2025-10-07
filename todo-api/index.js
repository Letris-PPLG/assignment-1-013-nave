import express from "express";

const app = express();
app.use(express.json());

//dummy data
let todos = [
  { id: 1, title: "Belajar Node.js", done: false },
  { id: 2, title: "Belajar Express.js", done: true },
];

//get
app.get("/todos", (req, res) => {
  res.json(todos);
});

let test1 = [
  {
    msg: "API berjalan normal",
    code: 200,
  },
];

//get
app.get("/", (req, res) => {
  res.json(test1);
});


//post
app.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = { id: todos.length + 1, title: title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/test", (req, res) => {
  res.send("Selamat Datang");
});

app.listen(5001, () => console.log("Server runing on http://localhost:5001"));
