import { users } from './users.js';
console.log(users);
let html = '';
users.forEach(({ id, name, email, phone }) => {
    html += `
    <li>
        <h3>${name}</h3>
        <p>
            <b>${email.toLowerCase()}</b>
            <span>${phone}</span>
        </p>
        <a href="./posts/index.html?userID=${id}">go to post</a>
        <hr/>
    </li>`
});
document.querySelector("#users-list").innerHTML = html;    