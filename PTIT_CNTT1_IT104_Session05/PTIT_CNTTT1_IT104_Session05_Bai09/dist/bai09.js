"use strict";
class Book {
    constructor(title, author, id, year) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.year = year;
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
    getYear() {
        return this.year;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setYear(newYear) {
        this.year = newYear;
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
            console.log(`- ${book.getId()}: ${book.getTitle()} ,Tác giả: ${book.getAuthor()}, Năm xuất bản: ${book.getYear()}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
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
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách ID ${id}.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}
const book1 = new Book("Harry Potter", "Dev", 1, 2022);
const book2 = new Book("Dev", "Dev", 2, 2020);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
console.log("Danh sách ban đầu:");
myLibrary.listBooks();
myLibrary.updateBookById(2, "Push your limit", "Dev", 2025);
console.log("\nDanh sách sau khi sửa:");
myLibrary.listBooks();
myLibrary.searchBooksByTitle("Harry");
myLibrary.deleteBookById(1);
console.log("Danh sách sau khi xóa:");
myLibrary.listBooks();
