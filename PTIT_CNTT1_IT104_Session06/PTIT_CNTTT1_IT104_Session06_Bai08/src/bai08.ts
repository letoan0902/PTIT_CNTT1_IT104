type BookStatus = "available" | "borrowed";
type MemberStatus = "active" | "locked";
interface IBook {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: BookStatus;
}
interface IMember {
    id: number;
    name: string;
    contact: string;
    lendedBooks: IBook[];
    status: MemberStatus;
}
interface ILendedBook {
    memberId: number;
    bookId: number;
    dueDate: string;
}
class Book implements IBook {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: BookStatus
    ) {}
}
class Member implements IMember {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: IBook[] = [],
        public status: MemberStatus
    ) {}
}
class LendedBook implements ILendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: string
    ) {}
}
class Library {
    books: IBook[] = [];
    members: IMember[] = [];
    addBook(book: IBook): void {
        this.books.push(book);
    }
    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id} | Title: ${b.title} | Author: ${b.author} | Stock: ${b.stock} | Status: ${b.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "Doraemon", "Dev", 5, "available");
const book2 = new Book(2, "Sherlock Holmes", "Dev", 3, "borrowed");
const book3 = new Book(3, "Harry Potter", "Dev", 4, "available");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();