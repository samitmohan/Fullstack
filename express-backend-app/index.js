const express = require("express"); // import
const app = express(); // instantiate
const port = 3000; // port (url) localhost:9000

const USERS = [];

const QUESTIONS = [{
  title: "Maximum of Array",
  description: "Given an array , return the maximum of the array?",
  testCases: [{input: "[1,2,3,4,5]", output: "5"}],
},];

// route : / (no specific route) : going to URL will process the request

const SUBMISSIONS = [];

app.use(express.json());

app.post("/signup", function (req, res) {
  // Body should have email and password
  // Store email password in user array and ensure password is same.
  // (return 200 status)

  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).send("Email and password required");
  }

  const userExists = USERS.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).send("User with this email already exists");
  }

  USERS.push({email, password});
  return res.status(200).send("User successfully registered");
});

app.post("/login", function (req, res) {
  // Send back token (random string)

  const {email, password} = req.body;
  const user = USERS.find((user) => user.email === email);
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  if (user.password !== password) {
    return res.status(401).send("Invalid email or password");
  }

  // Generating token
  const token = Math.random().toString(36).substring(2);
  return res.status(200).json({token});
});

app.get("/questions", function (req, res) {
  // return questions
  res.status(200).json(QUESTIONS);
});

app.get("/submissions", function (req, res) {
  // return users submissions for this problem
  res.status(200).json(SUBMISSIONS);
});

app.get("/userInfo", function (req, res) {
  // user info return (email, password)
  res.status(200).json(USERS);
});

app.post("/submissions", function (req, res) {
  // Extract problemId and solution from the request body
  const {problemId, solution} = req.body;

  // Check if problemID and solution were provided
  if (!problemId || !solution) {
    return res
      .status(400)
      .send("problemId and solution parameters are required");
  }

  // Generate random acceptance status (for now)
  const isAccepted = Math.random() < 0.5;

  // Create new submission object and add it to SUBMISSION array
  const newSubmission = {
    id: SUBMISSIONS.length + 1, problemId, solution, isAccepted,
  };
  SUBMISSIONS.push(newSubmission);

  // Return new submission with 201 status code
  return res.status(201).json(newSubmission);
});

// Start HTTP Server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

// Notes -: can do res.json or res.send to send json/html code to the server
