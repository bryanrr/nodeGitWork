const moment=require('moment');
const Person=require('./entities/Person');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
var myPerson= new Person("bryan","rodriguez");
myPerson.printName();
