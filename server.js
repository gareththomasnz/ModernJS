var     http = require("http"),
        querystring = require("querystring"),
        fs = require("fs"),
        path = require("path"),
        url = require("url");
        
var directory = "./documents";
        
var server = http.createServer(function(req, res){
        //res.write("Hello");
        //res.end();
        writeIndex(req, res);
                       
});

function writeIndex(req, res){
      res.writeHead(200, {"Content-Type": "text/html"});
      
      fs.readdir(directory, function(err, files){
                if(err){
                        res.end(err);
                        return;
                }
                
                var fileListHTML = "";
                for(var i = 0; i < files.length; i++){
                        var file = files[i];
                        fileListHTML += "<li><a href='"+ file +"'>"+ file +"</li>";
                }
                
                res.write("<ul>\n"+
                          //${fileListHTML} "\n"+"
                          fileListHTML +
                          "</ul>\n"+
                          "<form method = 'POST'>\n"+
                          "      <input type='text' name='file' />\n"+
                          "      <textarea name='text'></textarea>\n"+
                          "      <input type='submit' />\n"+
                          "</form>");
                res.end();
        });
}

server.listen(4000);
console.log("Server is running on 4000");