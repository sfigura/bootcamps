const fs = require("fs");

fs.writeFile("message.txt", "This is a text.", (err) => {
    if (err) throw err;
        console.log("The file has been created.");

});