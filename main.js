const moment=require('moment');
const Person=require('./entities/Person');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
var myPerson= new Person("bryan","rodriguez");
myPerson.printName();
var myPerson2=new Person("juan","sanchez");
myPerson2.printName();
console.log(myPerson.name+" "+myPerson.lastName+" and"+myPerson2.name+" "+myPerson2.lastName);
