"use strict";

var fs = require("fs");

const reader = fs.createReadStream("./documents/myDoc.txt");

let fileContents = "";

reader.on("data",  data => {
        console.log("data" + data);   
});

reader.on("end", () => {
        console.log(`Data found: $(fileContents)`);
});
