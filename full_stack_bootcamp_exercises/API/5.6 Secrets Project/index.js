
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.



import express from "express"
import axios from "axios"

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    
    try {
    const response = await axios.get(API_URL);
    const data = response.data;
    res.render("index.ejs", data);

    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500);
    }
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });