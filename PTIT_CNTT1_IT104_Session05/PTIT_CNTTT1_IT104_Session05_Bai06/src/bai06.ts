class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public getTitle(): string {
        return this.title;
    }
    public getAuthor(): string {
        return this.author;
    }
}
class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public listBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(`- ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
        }
    }
}
const book1 = new Book("Harry Potter", "Dev");
const book2 = new Book("Dev", "Dev");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();