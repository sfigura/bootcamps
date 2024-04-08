import express from "express";
const app = express();
const port = 3000;

//import ejs from "ejs";

const d = new Date();
let day = d.getDay();

if (day === 0 || day === 6) {
    var text = "Hey! It's a weekend, it's time to relax!";
}   else {
    var text = "Hey! It's a weekday, it's time to work hard!";
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", {text});
});