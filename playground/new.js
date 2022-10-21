class person{
    constructor(name="anonymous",age=0){
        this.name=name;
        this.age=age;
        this.major=major;
    }
    getGreeting(){
        return `Hi. I am ${this.name}and am ${this.age}years`;
    }
}

const person1 =new person("jeffery",29);
const person2 = new person("reina", 39);
console.log(person1.getGreeting());
console.log(person1.getGreeting());
const person4 =new person();
console.log(person1.getGreeting());
console.log(person1.getDiscription());


const design={
   place:"milan",
    company:"versace",
    scale:"europe",
    niche:"fashion",
};

//destracturing
const{milan,versace,europe,niche} = design
console.log(europe);
