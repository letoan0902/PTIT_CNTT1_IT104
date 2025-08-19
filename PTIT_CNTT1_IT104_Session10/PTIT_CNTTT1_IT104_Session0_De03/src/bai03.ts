class Audience {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): string {
        return `#${this.id} - ${this.name} | ${this.email} | SĐT: ${this.phone}`;
    }
}

abstract class Movie {
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean;

    constructor(id: number, title: string, genre: string, ticketPrice: number) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = true;
    }

    startShow(): void {
        this.isShowing = true;
    }

    stopShow(): void {
        this.isShowing = false;
    }

    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}

class ActionMovie extends Movie {
    constructor(id: number, title: string, ticketPrice: number) {
        super(id, title, "Hành động", ticketPrice);
    }

    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

    getSpecialOffers(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }

    getMovieInfo(): string {
        return "Phim hành động gay cấn, kỹ xảo hoành tráng";
    }
}

class ComedyMovie extends Movie {
    constructor(id: number, title: string, ticketPrice: number) {
        super(id, title, "Hài", ticketPrice);
    }

    calculateTicketCost(quantity: number): number {
        let totalCost = this.ticketPrice * quantity;
        if (quantity >= 4) {
            totalCost = totalCost * 0.9;
        }
        return totalCost;
    }

    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }

    getMovieInfo(): string {
        return "Phim hài nhẹ nhàng, vui nhộn";
    }
}

class AnimationMovie extends Movie {
    constructor(id: number, title: string, ticketPrice: number) {
        super(id, title, "Hoạt hình", ticketPrice);
    }

    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }

    getMovieInfo(): string {
        return "Phim hoạt hình với hình ảnh sống động";
    }
}

class TicketBooking {
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;

    constructor(bookingId: number, audience: Audience, movie: Movie, quantity: number) {
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }

    getDetails(): string {
        return `Đặt vé #${this.bookingId}\nKhán giả: ${this.audience.name}\nPhim: ${this.movie.title} (${this.movie.genre})\nSố lượng vé: ${this.quantity}\nTổng giá: ${this.totalPrice}đ`;
    }
}

class Cinema {
    movies: Movie[] = [];
    audiences: Audience[] = [];
    bookings: TicketBooking[] = [];

    findMovieById(collection: Movie[], id: number): Movie | undefined {
        return collection.find(m => m.id === id);
    }

    findAudienceById(collection: Audience[], id: number): Audience | undefined {
        return collection.find(a => a.id === id);
    }

    findTicketBookingById(collection: TicketBooking[], id: number): TicketBooking | undefined {
        return collection.find(b => b.bookingId === id);
    }

    addMovie(movie: Movie): void {
        this.movies.push(movie);
        alert(`Đã thêm phim: ${movie.title} (${movie.genre})`);
    }

    addAudience(name: string, email: string, phone: string): Audience | null {
        const audienceId = Number(prompt("Nhập ID khán giả: "));
        
        if (isNaN(audienceId) || audienceId <= 0) {
            alert("ID khán giả không hợp lệ!");
            return null;
        }
        
        if (this.findAudienceById(this.audiences, audienceId)) {
            alert("ID khán giả đã tồn tại!");
            return null;
        }
        
        const audience = new Audience(audienceId, name, email, phone);
        this.audiences.push(audience);
        return audience;
    }

    bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null {
        const audience = this.findAudienceById(this.audiences, audienceId);
        if (!audience) {
            alert("Không tìm thấy khán giả!");
            return null;
        }

        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return null;
        }

        if (!movie.isShowing) {
            alert("Phim đã ngừng chiếu!");
            return null;
        }

        if (quantity <= 0) {
            alert("Số lượng vé phải lớn hơn 0!");
            return null;
        }

        const bookingId = Number(prompt("Nhập ID đặt vé: "));
        
        if (isNaN(bookingId) || bookingId <= 0) {
            alert("ID đặt vé không hợp lệ!");
            return null;
        }
        
        if (this.findTicketBookingById(this.bookings, bookingId)) {
            alert("ID đặt vé đã tồn tại!");
            return null;
        }
        
        const booking = new TicketBooking(bookingId, audience, movie, quantity);
        this.bookings.push(booking);
        alert(`Đặt vé thành công! Mã đặt vé: #${booking.bookingId}`);
        return booking;
    }

    cancelMovie(movieId: number): void {
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }

        if (!movie.isShowing) {
            alert("Phim đã ngừng chiếu rồi!");
            return;
        }

        movie.stopShow();
        alert(`Đã ngừng chiếu phim: ${movie.title}`);
    }

    listShowingMovies(): void {
        const showingMovies = this.movies.filter(movie => movie.isShowing);
        if (showingMovies.length === 0) {
            alert("Không có phim nào đang chiếu!");
            return;
        }

        let message = "Danh sách phim đang chiếu:\n";
        showingMovies.forEach(movie => {
            message += `#${movie.id} - ${movie.title} (${movie.genre}) | Giá: ${movie.ticketPrice}đ\n`;
        });
        alert(message);
    }

    listAudienceBookings(audienceId: number): void {
        const audienceBookings = this.bookings.filter(booking => booking.audience.id === audienceId);
        if (audienceBookings.length === 0) {
            alert("Khán giả chưa có đặt vé nào!");
            return;
        }

        let message = `Danh sách đặt vé của ${audienceBookings[0].audience.name}:\n`;
        audienceBookings.forEach(booking => {
            message += `#${booking.bookingId} - ${booking.movie.title} | ${booking.quantity} vé | ${booking.totalPrice}đ\n`;
        });
        alert(message);
    }

    calculateTotalRevenue(): number {
        return this.bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
    }

    getMovieGenreCount(): void {
        const counter = this.movies.reduce<Record<string, number>>((acc, movie) => {
            acc[movie.genre] = (acc[movie.genre] || 0) + 1;
            return acc;
        }, {});

        let message = "Thống kê số lượng từng thể loại phim:\n";
        for (const genre in counter) {
            message += `${genre}: ${counter[genre]} phim\n`;
        }
        alert(message);
    }

    getMovieSpecialOffers(movieId: number): void {
        const movie = this.movies.find(m => m.id === movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }

        const offers = movie.getSpecialOffers();
        if (offers.length === 0) {
            alert(`Phim #${movieId} không có ưu đãi đặc biệt`);
        } else {
            alert(`Ưu đãi của phim ${movie.title}:\n${offers.join(", ")}`);
        }
    }

    searchById<T extends { id: number }>(collection: T[], id: number, type: string): void {
        const item = collection.find(item => item.id === id);
        if (!item) {
            alert(`Không tìm thấy ${type} với ID ${id}`);
            return;
        }

        if (type === "khán giả") {
            const audience = item as unknown as Audience;
            alert(audience.getDetails());
        } else if (type === "phim") {
            const movie = item as unknown as Movie;
            alert(`Phim #${movie.id}\nTên: ${movie.title}\nThể loại: ${movie.genre}\nGiá vé: ${movie.ticketPrice}đ\nTrạng thái: ${movie.isShowing ? "Đang chiếu" : "Ngừng chiếu"}\nMô tả: ${movie.getMovieInfo()}`);
        } else if (type === "đặt vé") {
            const booking = item as unknown as TicketBooking;
            alert(booking.getDetails());
        }
    }

    searchAudienceById(id: number): void {
        const audience = this.findAudienceById(this.audiences, id);
        if (!audience) {
            alert(`Không tìm thấy khán giả với ID ${id}`);
            return;
        }
        alert(audience.getDetails());
    }

    searchMovieById(id: number): void {
        const movie = this.findMovieById(this.movies, id);
        if (!movie) {
            alert(`Không tìm thấy phim với ID ${id}`);
            return;
        }
        alert(`Phim #${movie.id}\nTên: ${movie.title}\nThể loại: ${movie.genre}\nGiá vé: ${movie.ticketPrice}đ\nTrạng thái: ${movie.isShowing ? "Đang chiếu" : "Ngừng chiếu"}\nMô tả: ${movie.getMovieInfo()}`);
    }

    searchTicketBookingById(id: number): void {
        const booking = this.findTicketBookingById(this.bookings, id);
        if (!booking) {
            alert(`Không tìm thấy đặt vé với ID ${id}`);
            return;
        }
        alert(booking.getDetails());
    }
}

const cinema = new Cinema();

let running = true;
while (running) {
    let choice = prompt(
        `=== MENU QUẢN LÝ RẠP CHIẾU PHIM ===
1) Thêm khán giả mới
2) Thêm phim mới
3) Đặt vé
4) Ngừng chiếu phim
5) Hiển thị danh sách phim đang chiếu
6) Hiển thị các đặt vé của một khán giả
7) Tính và hiển thị tổng doanh thu
8) Đếm số lượng từng thể loại phim
9) Tìm kiếm và hiển thị thông tin bằng mã định danh
10) Hiển thị ưu đãi của một phim
11) Thoát chương trình
Chọn: `
    );

    switch (choice) {
        case "1": {
            const name = prompt("Tên khán giả: ")?.trim() || "";
            const email = prompt("Email: ") || "";
            const phone = prompt("Số điện thoại: ") || "";
            
            if (!name || !email || !phone) {
                alert("Thiếu thông tin khán giả!");
            } else {
                const audience = cinema.addAudience(name, email, phone);
                if (audience) {
                    alert(`Đã thêm khán giả: ${audience.getDetails()}`);
                }
            }
            break;
        }
        case "2": {
            const type = prompt("Loại phim (A-Action/C-Comedy/AN-Animation): ")?.toUpperCase() || "";
            const title = prompt("Tên phim: ")?.trim() || "";
            const ticketPrice = Number(prompt("Giá vé: "));
            
            if (!type || !title || isNaN(ticketPrice) || ticketPrice <= 0) {
                alert("Thông tin phim không hợp lệ!");
            } else {
                const movieId = Number(prompt("Nhập ID phim: "));
                
                if (isNaN(movieId) || movieId <= 0) {
                    alert("ID phim không hợp lệ!");
                } else if (cinema.findMovieById(cinema.movies, movieId)) {
                    alert("ID phim đã tồn tại!");
                } else {
                    let movie: Movie | undefined;
                    switch (type) {
                        case "A":
                            movie = new ActionMovie(movieId, title, ticketPrice);
                            break;
                        case "C":
                            movie = new ComedyMovie(movieId, title, ticketPrice);
                            break;
                        case "AN":
                            movie = new AnimationMovie(movieId, title, ticketPrice);
                            break;
                        default:
                            alert("Loại phim không hợp lệ!");
                            break;
                    }
                    if (movie) {
                        cinema.addMovie(movie);
                    }
                }
            }
            break;
        }
        case "3": {
            const audienceId = Number(prompt("ID khán giả: "));
            const movieId = Number(prompt("ID phim: "));
            const quantity = Number(prompt("Số lượng vé: "));
            
            if (isNaN(audienceId) || isNaN(movieId) || isNaN(quantity)) {
                alert("Thông tin đặt vé không hợp lệ!");
            } else {
                const booking = cinema.bookTickets(audienceId, movieId, quantity);
                if (booking) {
                    alert(booking.getDetails());
                }
            }
            break;
        }
        case "4": {
            const movieId = Number(prompt("ID phim cần ngừng chiếu: "));
            if (isNaN(movieId)) {
                alert("ID phim không hợp lệ!");
            } else {
                cinema.cancelMovie(movieId);
            }
            break;
        }
        case "5": {
            cinema.listShowingMovies();
            break;
        }
        case "6": {
            const audienceId = Number(prompt("ID khán giả: "));
            if (isNaN(audienceId)) {
                alert("ID khán giả không hợp lệ!");
            } else {
                cinema.listAudienceBookings(audienceId);
            }
            break;
        }
        case "7": {
            const totalRevenue = cinema.calculateTotalRevenue();
            alert(`Tổng doanh thu: ${totalRevenue}đ`);
            break;
        }
        case "8": {
            cinema.getMovieGenreCount();
            break;
        }
        case "9": {
            const searchType = prompt("Tìm kiếm (A-Audience/M-Movie/B-Booking): ")?.toUpperCase() || "";
            const id = Number(prompt("Nhập ID: "));
            
            if (isNaN(id)) {
                alert("ID không hợp lệ!");
            } else {
                switch (searchType) {
                    case "A":
                        cinema.searchAudienceById(id);
                        break;
                    case "M":
                        cinema.searchMovieById(id);
                        break;
                    case "B":
                        cinema.searchTicketBookingById(id);
                        break;
                    default:
                        alert("Loại tìm kiếm không hợp lệ!");
                        break;
                }
            }
            break;
        }
        case "10": {
            const movieId = Number(prompt("ID phim: "));
            if (isNaN(movieId)) {
                alert("ID phim không hợp lệ!");
            } else {
                cinema.getMovieSpecialOffers(movieId);
            }
            break;
        }
        case "11": {
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
