const moment=require('moment');
const Person=require('./entities/Person');
const constant1=require('./constants');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
var myPerson= new Person("bryan","rodriguez");
myPerson.printName();
var myPerson2=new Person("juan","sanchez");
myPerson2.printName();
console.log(myPerson.name+" "+myPerson.lastName+" and"+myPerson2.name+" "+myPerson2.lastName);


console.log("my first constant is: "+constant1.FOO);
