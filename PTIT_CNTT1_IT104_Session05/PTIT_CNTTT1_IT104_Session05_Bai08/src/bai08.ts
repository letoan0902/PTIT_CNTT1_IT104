class Book {
    private id:string|number;
    private title: string;
    private author: string;
    constructor(title: string, author: string,id:string|number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
     public getId(): number|string {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getAuthor(): string {
        return this.author;
    }
     public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    public setAuthor(newAuthor: string): void {
        this.author = newAuthor;
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
     public updateBookById(id: number|string, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách ID ${id}.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
     public searchBooksByTitle(keyword: string): void {
        const results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (results.length === 0) {
            console.log(`Không tìm thấy sách nào với từ khóa: "${keyword}".`);
        } else {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            for (const book of results) {
                console.log(`ID: ${book.getId()} - ${book.getTitle()} (Tác giả: ${book.getAuthor()})`);
            }
        }
    }
}
const book1 = new Book("Harry Potter", "Dev",1);
const book2 = new Book("Dev", "Dev",2);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
console.log("Danh sách ban đầu:");
myLibrary.listBooks();
myLibrary.updateBookById(2, "Push your limit", "Dev");
console.log("\nDanh sách sau khi sửa:");
myLibrary.listBooks();
myLibrary.searchBooksByTitle("Harry");