//// Function constructor
//
//var name;
//
//var Person = function(name, yearOfBirth, job) {
//    
//    this.name = name;
//    console.log("Name: " + name);
//    
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//    this.calculateAge = function () {
//        console.log(new Date().getFullYear() - this.yearOfBirth);
//    }
//}
//
//var john = new Person('John', 1990, 'teacher');
//
////john.calculateAge();
//
//Person('Rudolph', null, null);

// Object.create

//var personProto = {
//    calculateAge: function() {
//        console.log(new Date().getFullYear() - this.yearOfBirth);
//    }
//};
//
//var john = Object.create(personProto);
//
//john.yearOfBirth = 1990;
//
//var jane = Object.create(personProto, {
//    name: { value : 'Jane' },
//    yearOfBirth: { value: 1969 },
//    job: {value: 'designer'}
//});

// Primitives vs Objects

//var a = 23;
//var b = a;
//a = 46;
//console.log(a, b);

//var obj1 = {
//    name: 'John',
//    age: 26
//};
//
//var obj2 = obj1;
//obj1.age = 30;
//console.log(obj1.age);
//console.log(obj2.age);

//var age = 27;
//var obj = {
//    name: 'Jonas',
//    city: 'Lisbon'
//};
//
//function change(age, city) {
//    age = 30;
//    city.city = 'San Francisco';
//}

//change(age, obj);
//
//console.log(age);
//console.log(obj.city);

//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for(var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return new Date().getFullYear() - el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartRate(el) {
//    if(el >= 18 && el <= 81) {
//        return Math.round(206.9 - (0.67 * el));
//    } else {
//        return -1;
//    }
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//
//var fullAges = arrayCalc(ages, isFullAge);
//
//var rates = arrayCalc(ages, maxHeartRate);
//
//console.log(ages);
//console.log(fullAges);
//console.log(rates);
//
//function interviewQuestion(job) {
//    return function (name) {
//        if(job === 'designer') {
//            console.log(name + ', can you please explain what UX design is? : ' + job);
//        } else if(job === 'teacher') {
//            console.log('What subject do you teach, ' + name + '? : ' + job);
//        } else {
//        console.log('Hello ' + name, + ' what do you do?');
//        }
//    }
//}

//var teacherQuestion = interviewQuestion('teacher')('John');
//var designerQuestion = interviewQuestion('designer')('Mark');
//teacherQuestion('John');
//designerQuestion('Mark');

// Lecture Closures:

//function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function(yearOfBirth) {
//        var age = new Date().getFullYear() - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//var retirementUS = retirement(66);
//
//var retirementGermany 
//= retirement(65);
//var retirementIceLand 
//= retirement(67);
//
//
//
//retirementGermany(1990);
//retirementUS(1990);
//retirementIceLand(1990);

//retirement(66)(1990);

//function interviewQuestion(job) {
//    return function (name) {
//        if(job === 'designer') {
//            console.log(name + ', can you please explain what UX design is? : ' + job);
//        } else if(job === 'teacher') {
//            console.log('What subject do you teach, ' + name + '? : ' + job);
//        } else {
//        console.log('Hello ' + name, + ' what do you do?');
//        }
//    }
//}
//
//interviewQuestion('teacher')('John');

//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation : function(style, timeOfDay) {
//        if(style === 'formal') {
//            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' +
//                        this.name + ', I\'m a ' + 
//                        this.job + ' and I\'m ' + 
//                        this.age + ' years old.');
//        } else if(style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' + this.name + '. I\'m a ' + 
//                        this.job + ' and I\'m ' + 
//                        this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//    }
//}
//
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//}

//john.presentation('formal', 'morning');

//john.presentation.call(emily, 'friendly', 'afternoon');

//[For Passing an Array]
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//var johnFriendly = john.presentation.bind(john, 'friendly');
//
//johnFriendly('morning');
//johnFriendly('night');
//
//var emilyFormal = john.presentation.bind(emily, 'formal');
//
//emilyFormal('afternoon');
//
//var years = [2008, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for(var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return new Date().getFullYear() - el;
//}
//
//function isFullAge(limit, el) {
//    console.log("This is el: " + el);
//    return el >= limit;
//}
//
//var ages = arrayCalc(years, calculateAge);
//
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
//
//console.log(fullJapan);

/*
(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again. :)');
        }
    }

    var q1 = new Question('Who is my best friend?', ['Seiji', 'Mike', 'Alex'], 0);

    var q2 = new Question('What is my mother\'s name?', ['Bell', 'Sally', 'Iris'], 2);

    var q3 = new Question('Where do I work?', ['Nagoya', 'Osaka', 'Tokyo'], 1);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
})();
*/

(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        if(ans === this.correct) {
            var sc;
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again. :)');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    var q1 = new Question('Who is my best friend?', ['Seiji', 'Mike', 'Alex'], 0);

    var q2 = new Question('What is my mother\'s name?', ['Bell', 'Sally', 'Iris'], 2);

    var q3 = new Question('Where do I work?', ['Nagoya', 'Osaka', 'Tokyo'], 1);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score: ' + score);
        console.log('------------------------------------');
    }
    
    var keepScore = score();
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');
        
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion(); 
        }
        
    }
    
    nextQuestion();
})();



























