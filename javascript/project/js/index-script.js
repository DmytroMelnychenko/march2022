// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users

/*
let arr = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    }).then(function (user){
    arr.push(user);

})
console.log(arr)
*/



// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.

/*
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        const divWrap = document.createElement('div');
        divWrap.setAttribute('class','wrap');
        document.body.append(divWrap)
        for (const item of value) {
            const innerDiv = document.createElement('div');
            innerDiv.setAttribute('class','inner');
            innerDiv.innerHTML = `
            <h3>ID : ${item.id}</h3>
            <h4>name : ${item.name}</h4>`;
            divWrap.append(innerDiv);
        }
    })
*/



// 3 Добавить каждому блоку кнопку/ссылку, при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let dataUser = document.createElement('div');
        dataUser.classList.add('dataUser');
        for (const user1 of users) {
            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'Подробнее';
            const user_id = document.createElement('div');
            user_id.classList.add('user_id');
            user_id.innerHTML = `
            <h4>${user1.id}</h4>
            <h2>${user1.name}</h2>
            `;

            const keyUser = 'key';


            const saveInUser = (e) => {
                let userArray = JSON.parse(localStorage.getItem(keyUser)) || [];
                userArray.push({e})
                localStorage.setItem(keyUser, JSON.stringify(userArray))

            };

            btn.onclick = () => {
                saveInUser(user1)
                location.href = 'user-details.html';
            }

            dataUser.append(btn, user_id);
            user_id.appendChild(btn);
            document.body.appendChild(dataUser);
        }
    })
