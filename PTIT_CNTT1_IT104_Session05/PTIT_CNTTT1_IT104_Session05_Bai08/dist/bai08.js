"use strict";
class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách ID ${id}.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
    searchBooksByTitle(keyword) {
        const results = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (results.length === 0) {
            console.log(`Không tìm thấy sách nào với từ khóa: "${keyword}".`);
        }
        else {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            for (const book of results) {
                console.log(`ID: ${book.getId()} - ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
            }
        }
    }
}
const book1 = new Book("Harry Potter", "Dev", 1);
const book2 = new Book("Dev", "Dev", 2);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
console.log("Danh sách ban đầu:");
myLibrary.listBooks();
myLibrary.updateBookById(2, "Push your limit", "Dev");
console.log("\nDanh sách sau khi sửa:");
myLibrary.listBooks();
myLibrary.searchBooksByTitle("Harry");
