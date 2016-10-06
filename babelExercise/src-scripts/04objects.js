(() => {
      function getPoint(){
        let x = 0;
        y = 0;
        
        return{x, y};
        }
        
        const firstName = "Nelson";
        const person = {
              firstName,
              lastName: "LaQuet",
              
              sayHello(){
                console.log(`${this.firstName} ${this.lastName}`);
              },
              get fullName(){
                return `${this.firstName} ${this.lastName}`;
              }
        };
        
        const thing = {
               ["thing" + "other"]: "blah" 
        };
        
        
})();