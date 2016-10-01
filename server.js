var     http = require("http"),
        querystring = require("querystring"),
        fs = require("fs"),
        path = require("path"),
        url = require("url");
        
var directory = "./documents";
var invalidFileRegex = /^[.\/\\]|\.\./;
        
var server = http.createServer(function(req, res){
        
        if(req.method == "POST"){
                handlePost(req, res);
                return;
        }
        
        var query = url.parse(req.url, true).query;
        if(query.file){
             writeFile(req, res, query);
                return;
        }
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
                        fileListHTML += "<li><a href=?file=" + file +">"+ file +"</li>";
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
               
        });
}

function writeFile(req, res, query){
        if(invalidFileRegex.test(query.file)){
               writeText(res, 400, "Invalid filename");
               return;
        }
        var fileName = path.join(directory, query.file);
        fs.readFile(fileName, function(err, buffer){
                if(err){
                        writeText(res, 400, "Error");
                        return;
                }
                writeText(res, 200, buffer.toString());
        });
}

function handlePost(req, res){
        var body = "";
        req.on("data", function(data){
                body += data;
        });
        req.on("end", function(){
               var form = querystring.parse(body);
               
               if(!form.file || invalidFileRegex.test(form.file)){
                        writeText(res, 400, "Invalid File Path");
                        return;
               }
               try{
                        fs.writeFileSync(path.join(directory, form.file), form.text);
                        writeIndex(req, res);
               }catch(ex){
                        writeText(res, 400, "Could not save file");
                        console.error(ex);
               }
        });
}

function writeText(res, status, text){
        res.writeHead(status, {"Content-Type": "text/plain"});
        res.end(text);
}
 
 
server.listen(4000);
console.log("Server is running on 4000");