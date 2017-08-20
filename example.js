var names = ['Sreekanth', 'Srikanth', 'Shreekanth'];

// names.forEach(function(name){
//     console.log('forEach', name);
// })

// names.forEach ( (name) => {
//     console.log('arrowfunc', name);
// })

// names.forEach((name) => console.log(name))

var person = {
    name:"Kanthu",
    greet: function(){
        names.forEach( (name) => {
            console.log(this.name+" says hi to "+name)
        });
    }
};

person.greet();