//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// const S1 = new Student('Rajdeep')
// S1.study()
// const T1 = new Teacher('Aakash')
// T1.teach()
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
