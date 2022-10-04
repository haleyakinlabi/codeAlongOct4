//Object Demo

//create object
let person = {
    firstName: 'Haley',
    lastName: 'Akin',
    heightFeet: '5.6',
    age: 22,
    Favorites: {
        movie1: 'LOTR',
        movie2: 'harryPotter'
    },
    favFoods: ['noodles', 'pizza', 'rice']
}


//access firstName

//dot notation
console.log(person.firstName)
//bracket notation
console.log(person['firstName'])

//create new variable by destructoring 
let {firstName, lastName} = person
console.log(lastName)

//change last name
//let {lastName: last_name} = person 

//cammel case = helloWorldHowAreYou

//access favemovie1
//dot notation
console.log(person.Favorites.movie1)

//access favemovie1
//bracket notation
console.log(person['Favorites']['movie1'])

//access faveFoods pizza
//dot notation
console.log(person.favFoods[1])

//access faveFoods pizza
//bracket notation
console.log(person['favFoods'][1])

//-----Class-----------------------------------------

//create class with method
class Dog{
    constructor(name, color, age,){
        this.name = name
        this.color = color
        this.age = age
    }
    greeting(){
        console.log('Hi, my name is ' + this.name + ' I am ' + this.age)
    }
}

//creat object using class
let dog1 = new Dog('Freida', 'browm', 7)

console.log(dog1)

dog1.greeting()

//extended classes

class Puppy extends Dog {
    constructor(name, color, age, trainingLevel){
        super(name, color, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        return this.trainingLevel = this.trainingLevel + num // this.trainingLevel += num
    }
}

let puppy1 = new Puppy ('a', 'green', 4, 6)

//puppy1.greeting()

console.log(puppy1.levelUp(3))

//create method inside object
//method pretty much === function

let food ={
    name: 'pizza',
    price: 10,
    introduction: () => {
        console.log('hi, I love pizza')
    }
}
//access introdcution
food.introduction()

//resources 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in