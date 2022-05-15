/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
/*
class User{
    constructor(id,name,surname,email,phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let array = [
new User(1,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(2,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(3,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(4,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(5,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(6,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(7,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(8,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(10,'Vova','Zelenskiy','ukr@gmail.com','+380502086600'),
new User(9,'Vova','Zelenskiy','ukr@gmail.com','+380502086600')
];
*/

//console.log(array)

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

/*console.log(array.filter(i => i.id % 2 === 0));*/



//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

/*console.log(array.sort((a,b) => a.id - b.id));*/


/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
/*

class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
let array1 = [
new Client(5,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(6,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(1,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(2,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(4,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(3,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe','apple',]),
new Client(7,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer',]),
new Client(8,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe']),
new Client(10,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer','coffe','apple','banana']),
new Client(9,'Vova','Zelenskiy','ukr@gmail.com','+380502086600',['beer']),
];
*/

/*console.log(array)*/

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*console.log(array1.sort((a,b) => a.order.length - b.order.length))*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Cars (model,year,maxspeed,volum) {
    this.model = model;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volum = volum;
    this.driver = driver;
}









/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*!/*/
/* class Car {
    constructor(model,produser,year,maxspeed,volum) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volum = volum;
        this.driver = function () {

        }
    }
    drive () {
      return `їдемо зі швидкістю ${this.maxspeed} на годину`
    }
    info () {
        return `
        модель:${this.model},
        изготовитель:${this.produser},
        год выпуска:${this.year},
        максимальная скорость:${this.maxspeed},
        обьем двигателя:${this.volum},
          `
    }
     increaseMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
     }
     changeYear (newValue) {
        this.year = this.year = newValue;
     }
     addDriver = function (driver) {
        this.driver = driver
     }
 }
array2 = new Car('c63','mercedes',2022,350,6300)
console.log(array2)
console.log(array2.addDriver('Kevin'));
console.log(array2.info())
console.log(array2.drive())
console.log(array2.increaseMaxSpeed(10))
console.log(array2)
console.log(array2.changeYear(2023))
console.log(array2)*/


/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

/*
function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let arrCinderella = [
    new Cinderella('Tanya',27,36),
    new Cinderella('Valya',22,37),
    new Cinderella('Cralya',35,38),
    new Cinderella('Natalya',24,39),
    new Cinderella('Alya',25,40),
    new Cinderella('Gargulya',19,41),
    new Cinderella('Kamalya',29,42),
    new Cinderella('Maria',28,43),
    new Cinderella('Sveta',21,44),
    new Cinderella('Galya',43,45),
];
function Prince(name,age,findSize) {
    this.name = name;
    this.age = age;
    this.findSize = findSize;

}
let  newPrince = new Prince('Ivan',43,45);
let find = (arrCinderella,Prince) => {
    for (const item of arrCinderella) {
        if(item.footSize === Prince.findSize) {
            return `${item.name}`;
        }
        
    }
}
console.log(find(arrCinderella, newPrince));

let cind = arrCinderella.find(value => value.footSize === newPrince.findSize);
console.log(cind);
*/
