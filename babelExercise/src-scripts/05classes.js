(() => {
        
        class Person{
                get name(){return this._name;}
                set name(name){
                        console.log(`Setting name to ${name}`);
                        this._name = name;
                }
                constructor(name){
                        this._name = name;
                }
                render(){
                        console.log(`My name is ${this._name}`);
                }
                static loadPeople(){
                        return[
                                new Person("person1"),
                                new Person("person2")
                        ]
                }
        }
        
        //const nelson = new Person("Nelson");
        //nelson.render();
        //
        //nelson._name = "Who?";
        //nelson.render();
        
        const [p1, p2] = Person.loadPeople();
        p1.render();
        p2.render();
})();