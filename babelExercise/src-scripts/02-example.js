(() => {
   function func1(){
        var hey = 10;
        
        let test = 20;
}     

for(var i = 0; i < 10; i++){
        window.setTimeout(() =>{
                console.log(i);
                }, 500);
}

for(var i = 0; i < 10; i++){
(j => {
        window.setTimeout(() => {
                console.log(j);
                }, 0);
        })(i);
}

for(let i = 0; i < 10; i++){
        window.setTimeout(() =>{
                console.log(i);
                }, 0);
}

const thing = 10;

console.log(thing);

//thing = 20;

})();

