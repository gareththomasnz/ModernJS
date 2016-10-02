//var calc = require("./calculator");
//var add = require("./calculator").add;
//var result = calc.add(10, 20);
//var result2 = calc.sub(10, 20);
//var result3 = calc.mult(10, 20);
//var result = calc.add(10, 20);
//var result = add(10, 20);
//console.log(result);
//console.log(result2);
//console.log(result3);
//console.log(result);

var _ = require("lodash");

console.log(_);

var fs = require("fs"),
path = require("path");

var directory = "./documents";

fs.readdir(directory, function(err, files){
        if(err){
             console.error(err);
             return;
        }
        for(var i = 0; i < files.length; i++){
                var file = files[i];
                console.log(file);
                
                var fileContentsBuffer = fs.readFileSync(path.join(directory, file));
                console.log(fileContentsBuffer.toString());
        }
        });
