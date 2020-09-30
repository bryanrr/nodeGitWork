class Person{
	constructor(name,lastName){
		this.name=name;
		this.lastName=lastName;
	}
	
	printName(){
		console.log(this.name+" "+this.lastName);
	}
}

module.exports=Person;