//function loopOverTen(action){
//        for(var i = 0; i < 10; i++){
//                action(i);
//        }
//}

//function loopOver10(function(number){
//        console.log(number);
//        });

//loopOverTen(number => console.log(number));
//
//loopOverTen(number => {
//        console.log(number);
//        console.log(number * 10);
//        });
//
//var noParamFunc = () => console.log("HI");
//noParamFunc();

//var multiParamFunc = (left, right) => left + right;
//console.log(multiParamFunc(10, 20));

var obj = {
        name: "Nelson",
        
        showName(){
             console.log("My name is " + this.name);
             var that = this;
             setTimeout(function(){
                console.log("My name is still " + that.name);
                }, 1500);
             
             setTimeout(()=> {
                console.log("My name is still " + this.name + " again");
                }, 3000);
        }
};

obj.showName();