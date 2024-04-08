//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
const app = express();
const port = 3000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

var correctPw = "ILoveProgramming";

app.post("/check", (req, res) => {
    if (req.body.password === correctPw) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        console.log("Password wrong.");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });