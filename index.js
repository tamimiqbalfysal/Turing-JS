let person = {
    name: 'Mosh',
    age: 30
};

person.name= 'John';

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);


let selection = 'name';
person[selection] = 'Mary'; 
console.log(person.name); 