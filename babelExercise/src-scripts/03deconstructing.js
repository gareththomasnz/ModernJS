(() => {
        const person = {
                name: {first: "Nelson", last: "LaQuet"},
                roles: ["admin"],
                isActive: true
        };
        
        function printPerson(person){
                const roles = person.roles;
                const firstName = person.name.first;
                const lastName = personr.name.last;
                
                console.log(person.roles);
                console.log(person.roles.length);
        }
        
        function printPerson2(person){
            const {roles, name: {first, last}} = person;
            
            console.log(roles);
            console.log(roles.length);
            console.log(first);
            console.log(last);
        }
        
        function printPerson3(normalParam1, {roles, name: {first, last}}){
              console.log(roles);  
        }
        
        printPerson3(null, person);
        
        const point = {x: 1, y: 24};
        
        function translate({x,y}, amount){
                return{x: x + amount, y: y + amount};
                }
                
                console.log(translate(point, 20));
                
                const{x,y} = translate(point, 10);
                
        //default
        function getTrack(){
                return {title: "Track 1", lengthInSeconds: 30};
        }
        
        const {title, lengthInSeconds, description = "No desc found"} = getTrack();
        
        //arrays
        
        const array = [1, 2, 3, 4, 5, 6, 7];
        
        const[firstNum, secondNum, thirdNum] = array;
        const[x1, y1, ,,,,,,z1] = array;
        const[head1, head2, ... rest] = array;
        
        function sum(array){
                if(!array.length)
                return 0;
        const [head, ... tail] = array;
        return head + sum(tail);
        }
        
        console.log(sum(array));
        
        let left = 10;
        let right = 20;
        [left, right] = [right, left];
        
        //default parameters
        
        function withDefaults(person, output="name", options={verbose: true}){
                console.log([person, output, options]); 
                }
        
      withDefaults(person);
      withDefaults(person, "isActive", {debug: true});
        
})();