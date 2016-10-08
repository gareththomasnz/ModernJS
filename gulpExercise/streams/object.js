"use strict"

var stream = require("stream");

const source = new stream.Readable();

source.push("Whoa");
source.push("Blah");
source.push(null);

const dest = new stream.Writable({
        write: function(chunk, encoding, next){
                console.log(`Writing: ${chunk.toString()}`);
                next();
                }        
});

const transform = new stream.Transform({
        transform: function(chunk, encoding, next){
                this.push(`Transform: ${chunk.toString()}`);
                next();
                }  
});

source.pipe(transform).pipe(dest);

source.pipe(dest);