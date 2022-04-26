/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

/*function piped(a, b) {
    let result = (a * b);
    return result
}
let answer = piped(5,10);
console.log(answer)*/


/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

/*function circle(r) {
   let result = r ** 2;
   return 3.14 * result;
}
let answer = circle(20);
console.log(answer)*/


/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/

/*function circle(r, h) {
    return 2 * 3.14 * r * h;
}
let answer = circle(20,10);
console.log(answer)*/


/*- створити функцію яка приймає масив та виводить кожен його елемент*/

/*let array = [5,10,'user']
let qwerty = ['user','user2',25,40]

function lemtnt(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

}

lemtnt(array)
lemtnt(qwerty)*/


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function creatP(arguments) {
    document.write(`<p>${arguments}</p>`)
}
creatP('mbncn jeje jebchveh huy jejeh');*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function element(argument) {
    document.write(`<ul>`)
    document.write(`<li>${argument}</li>`)
    document.write(`<li>${argument}</li>`)
    document.write(`<li>${argument}</li>`)
    document.write(`</ul>`)
}
element('text')*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function element(argument, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${argument}</li>`)

    }
    document.write(`</ul>`)
}
element('text', 3)*/


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
let array = ['user',true,25,40,false,"user2"]

function lemtnt(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
     document.write(`<li>${array[i]}</li>`)
    }
document.write(`</ul>`)
}
lemtnt(array)
*/


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*let users = [{id:1,name:'user1',age:16},{id:2,name:'user2',age:19},{id:3,name:'user3',age:22}]

function qwerty(users) {
       for (let i = 0; i < users.length; i++) {
           let user = users[i];
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
       }

    }
    qwerty(users)*/





// - створити функцію яка повертає найменьше число з масиву

/*let array = [9,3,4,5,6,7];
function num(array) {
    let nam = array[0];
    for (const namElement of array) {
     if (namElement < nam) {
         nam = namElement;
     }
    }
    return nam;
}
console.log(num(array))
num(array)*/



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*let array = [1,2,10];
function num (array ) {
    let qwer = 0;
    for (const arrayElement of array) {
        qwer = qwer + arrayElement;

    }
    return qwer;

}
console.log(num(array))*/
