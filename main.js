// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is an warning');
// var,let,const

// const score=45;
// console.log(score);

//String,number,boolean,undefined

// const firstName ='shawn';
// const age = 56;

//Cancatenation//

// console.log('My name is ' + name +  ' and i am ' + age);

//Template String

// console.log(`My name is ${firstName} and I am ${age}`);

// const s = 'technology, code, computer, it'

// console.log(s.length);

// *Method
 
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(', '));

// *Arrays- variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['Apples', 'Oranges' , 'Mangoes']

// fruits[3] = 'Grapes';

// fruits.push('Pineapple');

// fruits.unshift('Strawberries');

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('Oranges'));

// console.log(fruits);

//  *Object letter rule*

// const person = {
//     FirstName: 'John',
//     LastName:'Doe',
//     age:56,
//     hobbies: ['music' , 'sports' , 'movies'],
//     address: {

//         street:'67 main st',
//         city:'Boston',
//         state:'Fs'

//     }

// }

// person.email = 'john@gmail.com';

// console.log(person);

// console.log(person.FirstName, person.LastName, person.address.street);

// const {FirstName , LastName , address: {city} } = person;

// console.log( city );

// Arrays of todos*

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true 
    },

    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true 
    },

    {
        id:3,
        text:'Dentist appt',
        isCompleted: false 
    }
];
// *forEach, map,filter

// todos.forEach(function(todo) {
//     console.log(todo.text);

// });

// const todoId = todos.map(function(todo) {
//     console.log(todo.id);
//     return todo.id;

// });

// console.log(todoId);

// const todoCompleted = todos.filter(function(todo) {
    
//     return todo.isCompleted === true;

// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);


// for(let todo of todos) {
//     console.log(todo.id);
// }

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);

// }
    


// console.log(todos[2].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// * for loop

// for (let i = 0; i <= 10; i++) {

//     console.log(`For Loop Number: ${i} `);
    
// }

// *While

// let i = 0;
// while(i <= 10) {
//     console.log(`While Loop Number: ${i} `);
//     i++;
// }



// *If Statement

// const x = 8;
// const y = 10;

// if(x===10) {
//     console.log('x is 10');
// } else if (x > 10) {

//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10 ');
// } 

// const x = 6;
// const y = 11;

// if(x > 5 && y > 10){

//     console.log('x is more than 5 or y is more than 10');
// }

// const x = 7;
// const color = 'green';
// // = x > 10 ? 'red' : 'blue';
// // console.log(color); 

// // *Switch

// switch(color) {
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//     console.log('color is NOT red or blue');
//     break;   
// }

// const addNums =  num1 => num1 + 5;

    // return num1 + num2;

// console.log(addNums(5));

// todos.forEach((todo) => console.log(todo));


// *Object Oriented programming*

// Constructor funtion

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthYear = function() {
        // return this.dob.getFullYear();
// }

    // this.getFullName = function() {
    // return `${this.firstName} ${this.lastName}`;
    // }
// }

// // Person.prototype.getBirthYear = function(){
// //     return this.dob.getFullYear();
// // } 

// // Person.prototype.getFullName = function(){
// //     return `${this.firstName} ${this.lastName}`;
// }

// *Class

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate object

// const person1 = new Person('John','Doe','4-3-1980');
// const person2 = new Person('Shayan','Ashraf','7-2-1999');

// console.log(person2.getFullName());
// console.log(person1);




// console.log(window);

// window.alert(1);

// *Single element

    //Another Way

// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// *Multiple element

// console.log(document.querySelectorAll('.item'));

// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>HELLO</h1>';


// const btn = document.querySelector('.btn');
// btn.style.background = ('red');


// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout' , (e) => {
//     e.preventDefault();
//     // console.log(e.target.Id);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>HELLO</h1>';
// });


// const myform = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myform.addEventListener('submit', onSubmit);

// function onSubmit(e) {

//     e.preventDefault();

    // console.log(nameInput.value);

    // if(nameInput.value === '' || emailInput.value === '') {
        // alert('please enter fields');
    //     msg.classList.add('error');
    //     setTimeout(() => msg.remove() , 3000);
    //     msg.innerHTML = 'please enter fields'
    // } else {
        // console.log('success');
        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // userList.appendChild(li);

        // clear fields

//         nameInput.value = '';
//         emailInput.value = '';

//     }
// }