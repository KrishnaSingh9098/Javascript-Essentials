// Define a class called 'Library'
class Library {
  constructor() {
    this.books = [];
  }

  addBooks(books) {
    this.books.push(...books);
  }

  listAllBooks() {
    this.books.forEach(function (book, index) {
      console.log(`Book ${index + 1}:`);
      book.info(); // Use the Book's info() method
    });
  }
}

// Define a Book class
class Book {
  constructor(name, author, price, isbfNo) {
    this.name = name;
    this.author = author;
    this.isbfNo = isbfNo;
    this.price = price;
    this.isReadStatus = false;
  }

  info() {
    console.log(
      `${this.name} is written by the author ${this.author}, ` +
      `available on Amazon for $${this.price}. ` +
      `${this.isReadStatus ? "You have read this book." : "You have not read this book yet."}`
    );
  }

  changeReadStatus() {
    this.isReadStatus = !this.isReadStatus;
  }
}

// Create a library instance
let bhopal = new Library();

// Create book instances
let b1 = new Book("Krishna", "Krishan the Legend", 99, "@9648dfsdg691");
let b2 = new Book("Mahabharat", "Ved Vyas", 199, "@7687abce91");
let b3 = new Book("Ramayan", "Valmiki", 149, "@8876xyz10");

// Update read status
b1.changeReadStatus();  // Mark b1 as read

// Add books to library
bhopal.addBooks([b1,b2,b3]);


// List all books with detailed info
bhopal.listAllBooks();
