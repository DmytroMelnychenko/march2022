/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post*/
//https://jsonplaceholder.typicode.com/posts

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
       const divWrap = document.createElement('div');
       divWrap.setAttribute('class','wrap');
       document.body.append(divWrap);

       for (const item of value) {
       const innerDiv = document.createElement('div');
       innerDiv.setAttribute('class','inner');
       innerDiv.innerHTML = `<h2>UserID : ${item.userId}</h2>
       <h2>ID : ${item.id}</h2>
       <h3>title : ${item.title}</h3>
       <h4>body : ${item.body}</h4>`;
         divWrap.append(innerDiv);
       }
    });


/*2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/

/*fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(value => {
     const divWrap = document.createElement('div');
     document.body.append(divWrap);

        for (const item of value) {
         const innerDiv = document.createElement('div');
         divWrap.append(innerDiv);
         for (const itemKey in item) {
             const divElement = document.createElement('div');
             divElement.innerText = `${itemKey} ${item[itemKey]}`;
             divWrap.append(divElement);
         }
      }
    });*/


