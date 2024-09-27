class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  
    static getAll() {
      // In a real application, this would fetch from a database
      return [
        new Book(1, 'To Kill a Mockingbird', 'Harper Lee'),
        new Book(2, '1984', 'George Orwell'),
      ];
    }
  
    static getById(id) {
      return this.getAll().find(book => book.id === parseInt(id));
    }
  
    static create(title, author) {
      const newId = this.getAll().length + 1;
      return new Book(newId, title, author);
    }
  }
  
  module.exports = Book;