/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


//get user input

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "What is the URL you would like to turn into a QR code?", name: "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("qr_url.txt", url, (err) => {
        if (err) throw err;
            console.log("The URL has been saved.");
    
    });

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something went wrong.");
    } else {
        console.log("Something went wrong.");
    }
});

