/*Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :

a) додає клас з назвою групи, елементу з ід main_header*/
const main = document.getElementById('main_header');
main.classList.add('qwerty')
console.log(main);

//b) робить шириниу елементу ul 400px

const main1 = document.getElementsByTagName('ul');
for (const main1Element of main1) {
    main1Element.style.width = '400px';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%
const main2 = document.getElementsByClassName('linkList');
for (const main2Element of main2) {
    main2Element.style.width = '50%'
}

//d) отримує текст який зберігається в елементі з класом listElement2
const main3 = document.getElementsByClassName('listElement2');
console.log(main3);

//e) отримує всі елементи li та змінює ім колір фону на сірий
const main4 = document.getElementsByTagName('li');
for (const main4Element of main4) {
    main4Element.style.background = 'gray'
    main4Element.style.border = 'solid 3px blue';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
const main5 = document.getElementsByTagName('a')
for (const main5Element of main5) {
    main5Element.classList.add('anchor')
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const main6 = document.getElementsByTagName('a');
for (const main6Element of main6) {
    if (main6Element.innerText === 'link3') {
        main6Element.style.fontSize = '40px';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
const main7 = document.getElementsByTagName('a');
for (const main7Element of main7) {
  main7Element.classList.add(`element_${main7Element.innerText}`);
}
*/

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*const main8 = document.getElementsByClassName('sub-header');
for (const main8Element of main8) {
    main8Element.style.background = prompt('колір фону: (yellow,orange,coral)');
    }*/


//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*const main9 = document.getElementsByClassName('sub-header');
for (const main9Element of main9) {
  if (main9Element.innerText === 'content 2 segment') {
      main9Element.style.color = prompt('колір тексту');
  }
}*/

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*const main10 = document.getElementsByClassName('content_1');
for (const main10Element of main10) {
    main10Element.innerText = prompt('тест на довільний')

}*/

//l) отримати елементи p та змінити їм padding на 20px
const main11 = document.getElementsByTagName('p');
for (const main11Element of main11) {
    main11Element.style.padding = '20px'
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const main12 = document.getElementsByClassName('text2');
for (const main12Element of main12) {
    main12Element.innerText = 'mon-year. Пример sep-2021 kurwa';


}