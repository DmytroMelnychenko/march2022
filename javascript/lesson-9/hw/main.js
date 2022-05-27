/*Все робити за допомоги js.
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/
/*let htmlDivElement = document.createElement('div');
htmlDivElement.setAttribute('class','wrap c','collapse','alpha','beta');
document.body.append(htmlDivElement);
htmlDivElement.style.background = 'coral';
htmlDivElement.style.width = '300px';
htmlDivElement.style.height = '100px';
htmlDivElement.innerText = 'hello';
htmlDivElement.style.fontSize = '80px';
document.body.append(htmlDivElement.cloneNode(/!*true*!/));



- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.
const array = ['Main','Products','About us','Contacts'];
for (const string of array) {
    let elementsByClassName = document.getElementsByClassName('menu')[0];
    let htmlliElement = document.createElement('li');
    htmlliElement.innerText = string;
    elementsByClassName.appendChild(htmlliElement);
}*/



//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

for (const item of coursesAndDurationArray) {
    let divElem = document.createElement('div');
    divElem.className = 'item';
    let htmlHeadingElement = document.createElement('h1');
    htmlHeadingElement.innerText ='${item.title}';
    let htmlParagraphElement = document.createElement('p');
    htmlParagraphElement.innerText = '${item.monthDuration}';
    document.body.append(htmlHeadingElement,htmlParagraphElement);
}


//- Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.
for (const inem of coursesAndDurationArray) {
    let divElem = document.createElement('div');
    divElem.className = 'item';
    let htmlHeadingElement = document.createElement('h1');
    htmlHeadingElement.innerText = '${item.title}';
    let htmlParagraphElement = document.createElement('p');
    htmlParagraphElement.innerText = '${item.mountDuration}';
    divElement.append(htmlHeadingElement,htmlParagraphElement);
    document.body.append(divElement);
}
*/
