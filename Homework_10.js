// 1)

class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
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
    return ('This is Author toString()');
  }
}



let author1 = new Author('Chekhov', 'antonchekhov@mail.ru', 'male');
console.log(author1);



  class Account {
    constructor(id, name, balance) {
      this._id = id;
      this.name = name;
      this.balance = balance;
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

// 2)

class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.name = name;
    this.balance = balance;
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
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
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
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
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

  set program(v1) {
    if (typeof v1 === 'object') {
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
    if (subject in this.data) {
      this.data[subject] = grade;
    }
    if (Object.values(this.data).every((num) => num > 50)) {
        return this._year += 1
      }
  }

  data = {
    'Math': 0,
    'Chemistry': 0,
    'Physics': 0,
  }

  toString() {
    return ('This is Student toString()')
  }
}



let s1 = new Student('Aaron', 'Jacobs', 'male', 18, ['Math', 'Chemistry', 'Physics'], 1, 1000);
s1.passExam('Math', 99);
s1.passExam('Chemistry', 100);
s1.passExam('Physics', 97);
console.log(s1);



class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
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
