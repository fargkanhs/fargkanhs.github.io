
let books = [];

function renderBooks() {
  const list = document.getElementById('book-list');
  list.innerHTML = '';
  books.forEach((book, index) => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `<strong>${book.title}</strong><p>${book.text}</p>`;
    list.appendChild(div);
  });
}

function promptForPassword() {
  const password = prompt("Βάλε κωδικό για προσθήκη παραμυθιού:");
  if (password === "1234") {
    const title = prompt("Τίτλος παραμυθιού:");
    const text = prompt("Κείμενο παραμυθιού:");
    if (title && text) {
      books.push({ title, text });
      renderBooks();
    }
  } else {
    alert("Λάθος κωδικός!");
  }
}

window.onload = renderBooks;
