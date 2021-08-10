document.querySelector('.adv').remove();

let books = document.querySelectorAll('.book');
let book1 = books[1];
let book2 = books[0];
let book3 = books[4];
let book4 = books[3];
let book5 = books[5];
let book6 = books[2];

book2.before(book1);
book2.after(book3);
book6.before(book4);
book6.before(book5);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

book3.querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";

let charapters2 = book2.querySelectorAll('li');
charapters2[9].after(charapters2[2]);
charapters2[9].before(charapters2[7]);
charapters2[3].after(charapters2[6]);
charapters2[6].after(charapters2[8]);

let charapters5 = book5.querySelectorAll('li');
charapters5[3].before(charapters5[9]);
charapters5[5].after(charapters5[2]);
charapters5[7].after(charapters5[5]);

book6.querySelectorAll('li')[8].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>");
