function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
  };

  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
  }

  Teacher.prototype = new Person();
  Teacher.prototype.constructor = Teacher;


let person = new Person('Sasha','Beliy',30,'male','soccer');
let teacher = new Teacher('Masha','Ukraine',20,'female','tv');
teacher.greeting();