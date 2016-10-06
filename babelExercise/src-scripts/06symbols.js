(() => {
//      function myThing(){
//        var localVar= 10;
//        return{
//                print(){
//                    console.log(localVar);    
//                }
//        };
//        
//}
//class Person {
//        constructor(name){
//                this._name = name;
//        }
//}
//
//const nelson = new Person("nelson");
//nelson._name = "whoa";

const mySymbol = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");

const person = {
        [mySymbol]: "blah",
        
        render(){
                console.log(this[mySymbol]);
                }
};

person.render();
console.log(person);

})();