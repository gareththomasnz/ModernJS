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

//var _ = require("lodash");
//
//console.log(_);
//
//var fs = require("fs"),
//path = require("path");
//
//var directory = "./documents";
//
//fs.readdir(directory, function(err, files){
//        if(err){
//             console.error(err);
//             return;
//        }
//        for(var i = 0; i < files.length; i++){
//                var file = files[i];
//                console.log(file);
//                
//                var fileContentsBuffer = fs.readFileSync(path.join(directory, file));
//                console.log(fileContentsBuffer.toString());
//        }
//        });

var _ = require("lodash");

var users = [
        {id: 1, name: "Nelson", roles: ["admin"]},
        {id: 2, name: "Wilbur", roles: ["registered", "moderator"]},
        {id: 3, name: "Arthur", roles: []},
        {id: 4, name: "Wilson", roles: ["registered"]},
        {id: 5, name: "Bruce", roles: ["admin"]}
];

var admins = _(users)
    .filter(u => _.includes(u.roles, "admin")) //_contains deprecated
    .map("name") //_pluck deprecated
    .value();
    
    console.log(admins);
    
    var array = require("lodash/array");
    console.log(array.first(users));
    
    //var each = require("lodash/collection/each");
    //each(users, user => console.log(user, name));
    
    