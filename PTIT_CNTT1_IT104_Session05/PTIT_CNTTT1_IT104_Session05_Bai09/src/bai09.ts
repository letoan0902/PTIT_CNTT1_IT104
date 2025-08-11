class Book {
    private id:string|number;
    private title: string;
    private author: string;
    private year:number;
    constructor(title: string, author: string,id:string|number,year:number) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.year = year;
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
    public getYear():number{
        return this.year
    }
     public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    public setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
    public setYear(newYear:number):void{
        this.year = newYear;
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
            console.log(`- ${book.getId()}: ${book.getTitle()} ,Tác giả: ${book.getAuthor()}, Năm xuất bản: ${book.getYear()}`);
        }
    }
     public updateBookById(id: number|string, newTitle: string, newAuthor: string,newYear:number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
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
     public deleteBookById(id: number | string): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);

        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách ID ${id}.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}
const book1 = new Book("Harry Potter", "Dev",1,2022);
const book2 = new Book("Dev", "Dev",2,2020);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
console.log("Danh sách ban đầu:");
myLibrary.listBooks();
myLibrary.updateBookById(2, "Push your limit", "Dev",2025);
console.log("\nDanh sách sau khi sửa:");
myLibrary.listBooks();
myLibrary.searchBooksByTitle("Harry");
myLibrary.deleteBookById(1);
console.log("Danh sách sau khi xóa:");
myLibrary.listBooks();