// Observable from an Event
function observableFromEvent() {
  let button = document.getElementById('books');

  // The subscribe will only be executed when click event is triggered
  fromEvent(button, 'click').subscribe((event) => {
    console.log(event);
    let booksDiv = document.getElementById('booksToRead');
    for (let book of toReadBooks) { // declare toReadBooks list of objects
      booksDiv.innerHTML += book.title + ' by ' + book.author + '<br>';
    }
  });
}
