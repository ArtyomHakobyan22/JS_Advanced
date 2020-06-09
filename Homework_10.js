// 1)

class Author {
    constructor(name, email, gender) {
      this._name = name;
      this._email = email;
      this._gender = gender;
    }

    get name() {
      return this._name
    }
    get email() {
      return this._email
    }
    get gender() {
      return this._gender
    }

    set name(value1) {
      this._name = value1;
    }
    set email(value2) {
      this._email = value2;
    }
    set gender(value3) {
      this._gender = value3;
    }

    toString() {
      return (`${this._name} is considered to be among the greatest writers of short fiction in history.`);
    }
  }
  
  
  
  let author1 = new Author('Chekhov', 'antonchekhov@mail.ru', 'male');
  console.log(author1);
  console.log(author1.toString());

  
  
  class Book {
    constructor(title, author, price, quantity) {
      this._title = title;
      this._author = author;
      this._price = price;
      this._quantity = quantity;
    }

    get title() {
      return this._title;
    }
    get author() {
      return this._author;
    }
    get price() {
      return this.price;
    }
    get quantity() {
      return this._quantity;
    }

    set title(val1) {
      this._title = val1;
    }
    set author(val2) {
      if (val2 instanceof Author) {
        this._author = val2;
      }
    }
    set price(val3) {
      this._price = val3;
    }
    set quantity(val4) {
      this._quantity = val4;
    }

    getProfit() {
      return this._quantity * this._price;
    }

    toString() {
      return (`${this._title} is a one-act drama by Anton Checkov`)
    }
  }
  
  
  
  let book1 = new Book('Tatiana Repina', author1.name, 15, 1000000);
  console.log(book1);
  console.log(book1.toString());
  console.log(book1.getProfit());
  alert(book1);

//--------------------------------------------------------------------------------------------------------------------------//

// 2)

class Account {
    constructor(id, name, balance) {
      this._id = id;
      this._name = name;
      this._balance = balance;
    }

    get id() {
      return this._id
    }
    get name() {
      return this._name
    }
    get balance() {
      return this._balance
    }

    set name(val1) {
      this._name = val1;
    }
    set balance(val2) {
      this._balance = val2;
    }

    credit(amount) {
      return this._balance += amount;
    }
    
    debit(amount) {
      if (this._balance - amount < 0) {
        alert('Amount exceeded Balance')
      }
      return this._balance -= amount;
    }
    
    transferTo(anotherAccount, amount) {
      this.debit(amount);
      anotherAccount.credit(amount)
    }
    
    static identifyAccounts(a, b) {
      return Object.entries(a).toString() === Object.entries(b).toString()
    }

    toString() {
      return ('Class Trials')
    }
  }
  
  let acc1 = new Account(1, 'firstAccount', 15000);
  // console.log(acc1);
  // acc1.credit(5000);
  // console.log(acc1);
  // acc1.debit(10000);
  // console.log(acc1);
  // acc1.debit(15000);
  // console.log(acc1);
  // acc1.credit(20000);
  // console.log(acc1);
  let acc2 = new Account(2, 'secondAccount', 22000);
  acc1.transferTo(acc2, 2000);
  console.log(acc1);
  console.log(acc2);
  console.log(Account.identifyAccounts(acc1, acc2));
  console.log(Account.identifyAccounts(acc1, acc1));
  console.log(acc1.toString());

//--------------------------------------------------------------------------------------------------------------------------//

// 3)

class Person {
    constructor(firstName, lastName, gender, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._gender = gender;
      this._age = age;
    }

    get firstName() {
      return this._firstName
    }
    get lastName() {
      return this._lastName
    }
    get gender() {
      return this._gender
    }
    get age() {
      return this._age
    }

    set firstName(val1) {
      this._firstName = val1
    }
    set lastName(val2) {
      this._lastName = val2
    }
    set gender(val3) {
      this._gender = val3
    }
    set age(val4) {
      this._age = val4
    }

    toString() {
      return ('This is Person toString()')
    }
  }

  let p1 = new Person();
  
  class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee, exams) {
      super(firstName, lastName, gender, age);
      this._program = program;
      this._year = year;
      this._fee = fee;
      this._exams = exams;
    }

    get program() {
      return this._program;
    }
    get year() {
      return this._year;
    }
    get fee() {
      return this._fee
    }
    get exams() {
      return this._exams;
    }

    set program(v1) {
      if (typeof v1 === 'Object') {
        this._program = v1;
      }
    }
    set year(v2) {
      this._year = v2;
    }
    set fee(v3) {
      this._fee = v3;
    }
    
    passExam(subject, grade) {
      if (this._program.includes(subject)) {
        this._exams.push(grade);
      }
      if (this._exams.length === this._program.length && this._exams.reduce((t, e) => t += e) / this._exams.length > 50) {
          return this._year += 1
        }
    }

    toString() {
      return ('This is Student toString()')
    }
  }

  
  
  let s1 = new Student('Aaron', 'Jacobs', 'male', 18, ['Math', 'Chemistry', 'Physics'], 1, 1000, []);
  s1.passExam('Math', 99);
  s1.passExam('Chemistry', 100);
  s1.passExam('Physics', 97);
  console.log(s1);

  
  
  class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
      super(firstName, lastName, gender, age);
      this._program = program;
      this._pay = pay;
    }

    get program() {
      return this._program;
    }
    get pay() {
      return this._pay;
    }

    set program(value1) {
      if (typeof value1 === 'string') {
        this._program = value1;
      }
    }
    set pay(value2) {
      this._pay =value2;
    }

    toString() {
      return ('This is Teacher toString()')
    }
  }
  let t1 = new Teacher();
  alert(p1);
  alert(s1);
  alert(t1);