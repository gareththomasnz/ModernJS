"use strict";

var vfs = require("vinyl-fs"),
    stream = require("stream"),
    fs = require("fs"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer");
    
    const basicPlugin = new stream.Transform({
        objectMode: true,
        
        transform: function(file, encoding, next){
                //console.log(file.path);
                const contents = file.contents.toString();
                file.contents = new Buffer(contents.replace(/\w/g, "Blah "));
                this.push(file);
                next();
        }
});
    
vfs.src("./src/**/*.js")
        .pipe(basicPlugin)
        .pipe(vfs.dest("./dist"));
        
fs.createReadStream("./docs/docs1.txt")
.pipe(source("blah.txt"))
.pipe(buffer())
.pipe(basicPlugin)
.pipe(vfs.dest("./dist"));