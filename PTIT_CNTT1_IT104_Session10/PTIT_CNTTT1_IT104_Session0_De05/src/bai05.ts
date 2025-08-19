class Person {
    private id: number;
    private name: string;
    private email: string;
    private phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): void {
        alert(`#${this.id} - ${this.name} | ${this.email} | SĐT: ${this.phone}`);
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

abstract class Book {
    private bookId: number;
    title: string;
    price: number;
    amount: number;
    type: string;
    isAvailable: boolean;

    constructor(bookId: number, title: string, price: number, amount: number, type: string) {
        this.bookId = bookId;
        this.title = title;
        this.price = price;
        this.amount = amount;
        this.type = type;
        this.isAvailable = amount > 0;
    }

    borrowBook(): void {
        if (this.amount > 0) {
            this.amount--;
            if (this.amount === 0) {
                this.isAvailable = false;
            }
        }
    }

    returnBook(): void {
        this.amount++;
        if (this.amount > 0) {
            this.isAvailable = true;
        }
    }

    getBookId(): number {
        return this.bookId;
    }

    abstract calculateLateFee(daysLate: number): number;
}

class FictionBook extends Book {
    constructor(bookId: number, title: string, price: number, amount: number) {
        super(bookId, title, price, amount, "Tiểu thuyết");
    }

    calculateLateFee(daysLate: number): number {
        return daysLate * 5000;
    }
}

class ScienceBook extends Book {
    constructor(bookId: number, title: string, price: number, amount: number) {
        super(bookId, title, price, amount, "Khoa học");
    }

    calculateLateFee(daysLate: number): number {
        return daysLate * 10000;
    }
}

class HistoryBook extends Book {
    constructor(bookId: number, title: string, price: number, amount: number) {
        super(bookId, title, price, amount, "Lịch sử");
    }

    calculateLateFee(daysLate: number): number {
        return daysLate * 7000;
    }
}

class Borrowing {
    transactionId: number;
    borrower: Person;
    book: Book;
    days: number;
    totalCost: number;

    constructor(transactionId: number, borrower: Person, book: Book, days: number) {
        this.transactionId = transactionId;
        this.borrower = borrower;
        this.book = book;
        this.days = days;
        this.totalCost = book.price * days;
    }

    getDetails(): void {
        alert(`Giao dịch mượn sách #${this.transactionId}\nNgười mượn: ${this.borrower.getName()}\nSách: ${this.book.title} (${this.book.type})\nSố ngày mượn: ${this.days}\nTổng chi phí: ${this.totalCost}đ`);
    }
}

class Repository<T extends Record<string, any>> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.getId && item.getId() === id);
    }
}

class LibraryManager {
    booksRepo: Repository<Book>;
    borrowersRepo: Repository<Person>;
    borrowingRepo: Repository<Borrowing>;

    constructor() {
        this.booksRepo = new Repository<Book>();
        this.borrowersRepo = new Repository<Person>();
        this.borrowingRepo = new Repository<Borrowing>();
    }

    addBook(): void {
        const type = prompt("Loại sách (F-Fiction/S-Science/H-History): ")?.toUpperCase() || "";
        const title = prompt("Tiêu đề sách: ")?.trim() || "";
        const price = Number(prompt("Giá thuê: "));
        const amount = Number(prompt("Số lượng sách: "));
        
        if (!type || !title || isNaN(price) || price <= 0 || isNaN(amount) || amount <= 0) {
            alert("Thông tin sách không hợp lệ!");
            return;
        }

        const bookId = Number(prompt("Nhập ID sách: "));
        
        if (isNaN(bookId) || bookId <= 0) {
            alert("ID sách không hợp lệ!");
            return;
        }

        if (this.booksRepo.findById(bookId)) {
            alert("ID sách đã tồn tại!");
            return;
        }

        let book: Book | undefined;
        switch (type) {
            case "F":
                book = new FictionBook(bookId, title, price, amount);
                break;
            case "S":
                book = new ScienceBook(bookId, title, price, amount);
                break;
            case "H":
                book = new HistoryBook(bookId, title, price, amount);
                break;
            default:
                alert("Loại sách không hợp lệ!");
                return;
        }

        if (book) {
            this.booksRepo.add(book);
            alert(`Đã thêm sách: ${book.title} (${book.type}) với số lượng ${amount}`);
        }
    }

    addBorrower(): Person | null {
        const name = prompt("Tên người mượn: ")?.trim() || "";
        const email = prompt("Email: ") || "";
        const phone = prompt("Số điện thoại: ") || "";
        
        if (!name || !email || !phone) {
            alert("Thiếu thông tin người mượn!");
            return null;
        }

        const borrowerId = Number(prompt("Nhập ID người mượn: "));
        
        if (isNaN(borrowerId) || borrowerId <= 0) {
            alert("ID người mượn không hợp lệ!");
            return null;
        }

        if (this.borrowersRepo.findById(borrowerId)) {
            alert("ID người mượn đã tồn tại!");
            return null;
        }

        const borrower = new Person(borrowerId, name, email, phone);
        this.borrowersRepo.add(borrower);
        return borrower;
    }

    borrowBook(bookId: number): Borrowing | null {
        const book = this.booksRepo.findById(bookId);
        if (!book) {
            alert("Không tìm thấy sách!");
            return null;
        }

        if (!book.isAvailable) {
            alert("Sách đã hết, không thể mượn!");
            return null;
        }

        const borrowerId = Number(prompt("Nhập ID người mượn: "));
        const borrower = this.borrowersRepo.findById(borrowerId);
        
        if (!borrower) {
            alert("Không tìm thấy người mượn!");
            return null;
        }

        const days = Number(prompt("Số ngày mượn: "));
        
        if (isNaN(days) || days <= 0) {
            alert("Số ngày mượn không hợp lệ!");
            return null;
        }

        const transactionId = Number(prompt("Nhập ID giao dịch: "));
        
        if (isNaN(transactionId) || transactionId <= 0) {
            alert("ID giao dịch không hợp lệ!");
            return null;
        }

        if (this.borrowingRepo.findById(transactionId)) {
            alert("ID giao dịch đã tồn tại!");
            return null;
        }

        book.borrowBook();
        const borrowing = new Borrowing(transactionId, borrower, book, days);
        this.borrowingRepo.add(borrowing);
        alert(`Cho mượn sách thành công! Mã giao dịch: #${borrowing.transactionId}`);
        return borrowing;
    }

    returnBook(bookId: number): void {
        const book = this.booksRepo.findById(bookId);
        if (!book) {
            alert("Không tìm thấy sách!");
            return;
        }

        book.returnBook();
        alert(`Đã trả sách: ${book.title}`);
    }

    listAvailableBooks(): void {
        const allBooks = this.booksRepo.getAll();
        const availableBooks = allBooks.filter(book => book.isAvailable);
        
        if (availableBooks.length === 0) {
            alert("Không có sách nào có thể mượn!");
            return;
        }

        let message = "Danh sách sách có thể mượn:\n";
        availableBooks.forEach(book => {
            message += `#${book.getBookId()} - ${book.title} (${book.type}) | Giá: ${book.price}đ | Số lượng: ${book.amount}\n`;
        });
        alert(message);
    }

    listBorrowingByCustomer(customerId: number): void {
        const allBorrowings = this.borrowingRepo.getAll();
        const customerBorrowings = allBorrowings.filter(borrowing => borrowing.borrower.getId() === customerId);
        
        if (customerBorrowings.length === 0) {
            alert("Người mượn chưa có giao dịch mượn sách nào!");
            return;
        }

        let message = `Danh sách sách của ${customerBorrowings[0].borrower.getName()}:\n`;
        customerBorrowings.forEach(borrowing => {
            message += `#${borrowing.transactionId} - ${borrowing.book.title} | ${borrowing.days} ngày | ${borrowing.totalCost}đ\n`;
        });
        alert(message);
    }

    calculateTotalRevenue(): number {
        const allBorrowings = this.borrowingRepo.getAll();
        return allBorrowings.reduce((sum, borrowing) => sum + borrowing.totalCost, 0);
    }

    countBooksByGenre(): void {
        const allBooks = this.booksRepo.getAll();
        const counter = allBooks.reduce<Record<string, number>>((acc, book) => {
            acc[book.type] = (acc[book.type] || 0) + 1;
            return acc;
        }, {});

        let message = "Thống kê số lượng sách theo từng thể loại:\n";
        for (const genre in counter) {
            message += `${genre}: ${counter[genre]} cuốn\n`;
        }
        alert(message);
    }

    displayAllBorrowers(): void {
        const allBorrowers = this.borrowersRepo.getAll();
        
        if (allBorrowers.length === 0) {
            alert("Chưa có người mượn nào!");
            return;
        }

        let message = "Danh sách toàn bộ người mượn:\n";
        allBorrowers.forEach(borrower => {
            message += `#${borrower.getId()} - ${borrower.getName()}\n`;
        });
        alert(message);
    }
}

const libraryManager = new LibraryManager();

let running = true;
while (running) {
    let choice = prompt(
        `=== MENU QUẢN LÝ THƯ VIỆN ===
1) Thêm người mượn
2) Thêm sách
3) Cho mượn sách
4) Hiển thị toàn bộ người mượn
5) Trả sách
6) Hiển thị toàn bộ sách có thể mượn
7) Hiển thị toàn bộ sách của người mượn
8) Tính tổng doanh thu
9) Đếm số lượng sách theo từng thể loại sách
10) Thoát chương trình
Chọn: `
    );

    switch (choice) {
        case "1": {
            const borrower = libraryManager.addBorrower();
            if (borrower) {
                alert("Đã thêm người mượn thành công!");
                borrower.getDetails();
            }
            break;
        }
        case "2": {
            libraryManager.addBook();
            break;
        }
        case "3": {
            const bookId = Number(prompt("Nhập ID sách cần mượn: "));
            if (isNaN(bookId)) {
                alert("ID sách không hợp lệ!");
            } else {
                const borrowing = libraryManager.borrowBook(bookId);
                if (borrowing) {
                    borrowing.getDetails();
                }
            }
            break;
        }
        case "4": {
            libraryManager.displayAllBorrowers();
            break;
        }
        case "5": {
            const bookId = Number(prompt("Nhập ID sách cần trả: "));
            if (isNaN(bookId)) {
                alert("ID sách không hợp lệ!");
            } else {
                libraryManager.returnBook(bookId);
            }
            break;
        }
        case "6": {
            libraryManager.listAvailableBooks();
            break;
        }
        case "7": {
            const customerId = Number(prompt("Nhập ID người mượn: "));
            if (isNaN(customerId)) {
                alert("ID người mượn không hợp lệ!");
            } else {
                libraryManager.listBorrowingByCustomer(customerId);
            }
            break;
        }
        case "8": {
            const totalRevenue = libraryManager.calculateTotalRevenue();
            alert(`Tổng doanh thu: ${totalRevenue}đ`);
            break;
        }
        case "9": {
            libraryManager.countBooksByGenre();
            break;
        }
        case "10": {
            if (confirm("Bạn có chắc muốn thoát chương trình?")) {
                running = false;
            }
            break;
        }
        default: {
            alert("Lựa chọn không hợp lệ!");
            break;
        }
    }
}
