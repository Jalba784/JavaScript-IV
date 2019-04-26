// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}
const ronWeezley = new Instructor({
    name: 'Ron',
    age: 27,
    location: 'London',
    gender: 'male',
    specialty: 'redux',
    favLanguage: 'C++',
    catchPhrase: 'Die another Day'
});
const harryPotter = new Instructor({
    name: 'Harry',
    age: 28,
    location: 'Manchester',
    gender: 'male',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'One can never have enough socks'
});


let favClas = ['JavaScript', 'Python', 'HTML & CSS'];
let bobClass = ['React', 'C', 'HTML'];
class Student extends Person{
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}
const me = new Student({
    name: 'Jose',
    age: 35,
    location: 'California',
    gender: 'male',
    previousBackground: 'warehouse worker',
    className: 'WEBPT6',
    favSubjects: favClas
});
const student1 = new Student({
    name: 'Bob',
    age: 41,
    location: 'Iowa',
    gender: 'male',
    previousBackground: 'Mechanic',
    className: 'WEBPT6',
    favSubjects: bobClass
});

class ProjectManager extends Instructor{
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}
const serverus = new ProjectManager({
    name: 'Serverus Snape',
    age: 51,
    location: 'Liverpool',
    gender: 'male',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Stuff happens',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});
const minerva = new ProjectManager({
    name: 'Minerva McGonagall',
    age: 87,
    location: 'Edinburg',
    gender: 'female',
    specialty: 'Data Structures',
    favLanguage: 'Python',
    catchPhrase: 'have a nice day',
    gradClassName: 'CS101',
    favInstructor: 'Keiran'
});

console.log(ronWeezley);
console.log(harryPotter);
console.log(ronWeezley.demo('HTML'));
console.log(harryPotter.demo('Javascript'));
console.log(ronWeezley.grade(me, 'HTML'));
console.log(harryPotter.grade(me, 'Python'));
console.log();
console.log();
console.log(me);
console.log(me.listsSubjects());
console.log(me.PRAssignment('HTML'));
console.log(me.sprintChallenge('JavaScript'));
console.log(student1);
console.log(student1.listsSubjects());
console.log(student1.PRAssignment('SQL'));
console.log(student1.sprintChallenge('UI'));
console.log();
console.log();
console.log(serverus);
console.log(serverus.standUp('webpt6_help'));
console.log(serverus.debugsCode(me, 'JavaScrpt'));
console.log(minerva);
console.log(minerva.standUp('webpt6_fri'));
console.log(minerva.debugsCode(me, 'Python'));



