class Person {
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

abstract class Room {
    roomId: number;
    type: string;
    pricePerNight: number;
    isAvailable: boolean;

    constructor(roomId: number, type: string, pricePerNight: number) {
        this.roomId = roomId;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = true;
    }

    bookRoom(): void {
        this.isAvailable = false;
    }

    releaseRoom(): void {
        this.isAvailable = true;
    }

    abstract calculateCost(nights: number): number;

    abstract getAdditionalServices(): string[];

    abstract getCancellationPolicy(): string;
}

class StandardRoom extends Room {
    constructor(roomId: number, pricePerNight: number) {
        super(roomId, "Standard", pricePerNight);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return [];
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 100% nếu hủy trước 1 ngày";
    }
}

class DeluxeRoom extends Room {
    constructor(roomId: number, pricePerNight: number) {
        super(roomId, "Deluxe", pricePerNight);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return ["Ăn sáng"];
    }

    getCancellationPolicy(): string {
        return "Hoàn lại 50% nếu hủy trước 2 ngày";
    }
}

class SuiteRoom extends Room {
    constructor(roomId: number, pricePerNight: number) {
        super(roomId, "Suite", pricePerNight);
    }

    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return ["Spa", "Minibar"];
    }

    getCancellationPolicy(): string {
        return "Không hoàn lại tiền nếu hủy";
    }
}

class Booking {
    bookingId: number;
    customer: Person;
    room: Room;
    nights: number;
    totalCost: number;

    constructor(bookingId: number, customer: Person, room: Room, nights: number) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.room = room;
        this.nights = nights;
        this.totalCost = room.calculateCost(nights);
    }

    getDetails(): void {
        alert(`Đặt phòng #${this.bookingId}\nKhách hàng: ${this.customer.name}\nPhòng: ${this.room.type} #${this.room.roomId}\nSố đêm: ${this.nights}\nTổng chi phí: ${this.totalCost}đ`);
    }
}

class HotelManager {
    rooms: Room[] = [];
    bookings: Booking[] = [];
    customers: Person[] = [];

    findCustomerById(id: number): Person | undefined {
        return this.customers.find(c => c.id === id);
    }

    findRoomById(id: number): Room | undefined {
        return this.rooms.find(r => r.roomId === id);
    }

    addRoom(type: string, pricePerNight: number): void {
        let room: Room;
        const roomId = Number(prompt("Nhập ID phòng: "));
        
        if (isNaN(roomId) || roomId <= 0) {
            alert("ID phòng không hợp lệ!");
            return;
        }
        
        if (this.findRoomById(roomId)) {
            alert("ID phòng đã tồn tại!");
            return;
        }
        
        switch (type.toUpperCase()) {
            case "S":
                room = new StandardRoom(roomId, pricePerNight);
                break;
            case "D":
                room = new DeluxeRoom(roomId, pricePerNight);
                break;
            case "SU":
                room = new SuiteRoom(roomId, pricePerNight);
                break;
            default:
                alert("Loại phòng không hợp lệ!");
                return;
        }
        this.rooms.push(room);
        alert(`Đã thêm phòng ${room.type} #${room.roomId} với giá ${pricePerNight}đ/đêm`);
    }

    addCustomer(name: string, email: string, phone: string): Person | null {
        const customerId = Number(prompt("Nhập ID khách hàng: "));
        
        if (isNaN(customerId) || customerId <= 0) {
            alert("ID khách hàng không hợp lệ!");
            return null;
        }
        
        if (this.findCustomerById(customerId)) {
            alert("ID khách hàng đã tồn tại!");
            return null;
        }
        
        const customer = new Person(customerId, name, email, phone);
        this.customers.push(customer);
        return customer;
    }

    bookRoom(customerId: number, roomId: number, nights: number): Booking | null {
        const customer = this.findCustomerById(customerId);
        if (!customer) {
            alert("Không tìm thấy khách hàng!");
            return null;
        }

        const room = this.findRoomById(roomId);
        if (!room) {
            alert("Không tìm thấy phòng!");
            return null;
        }

        if (!room.isAvailable) {
            alert("Phòng đã được đặt!");
            return null;
        }

        if (nights <= 0) {
            alert("Số đêm phải lớn hơn 0!");
            return null;
        }

        room.bookRoom();
        const bookingId = Number(prompt("Nhập ID đặt phòng: "));
        
        if (isNaN(bookingId) || bookingId <= 0) {
            alert("ID đặt phòng không hợp lệ!");
            room.releaseRoom();
            return null;
        }
        
        const existingBooking = this.bookings.find(b => b.bookingId === bookingId);
        if (existingBooking) {
            alert("ID đặt phòng đã tồn tại!");
            room.releaseRoom();
            return null;
        }
        
        const booking = new Booking(bookingId, customer, room, nights);
        this.bookings.push(booking);
        alert(`Đặt phòng thành công! Mã đặt phòng: #${booking.bookingId}`);
        return booking;
    }

    releaseRoom(roomId: number): void {
        const room = this.findRoomById(roomId);
        if (!room) {
            alert("Không tìm thấy phòng!");
            return;
        }

        if (room.isAvailable) {
            alert("Phòng đã trống!");
            return;
        }

        room.releaseRoom();
        alert(`Đã trả phòng #${roomId}`);
    }

    listAvailableRooms(): void {
        const availableRooms = this.rooms.filter(room => room.isAvailable);
        if (availableRooms.length === 0) {
            alert("Không có phòng nào còn trống!");
            return;
        }

        let message = "Danh sách phòng còn trống:\n";
        availableRooms.forEach(room => {
            message += `#${room.roomId} - ${room.type} | Giá: ${room.pricePerNight}đ/đêm\n`;
        });
        alert(message);
    }

    listBookingsByCustomer(customerId: number): void {
        const customerBookings = this.bookings.filter(booking => booking.customer.id === customerId);
        if (customerBookings.length === 0) {
            alert("Khách hàng chưa có đặt phòng nào!");
            return;
        }

        let message = `Danh sách đặt phòng của ${customerBookings[0].customer.name}:\n`;
        customerBookings.forEach(booking => {
            message += `#${booking.bookingId} - Phòng ${booking.room.type} | ${booking.nights} đêm | ${booking.totalCost}đ\n`;
        });
        alert(message);
    }

    calculateTotalRevenue(): number {
        return this.bookings.reduce((sum, booking) => sum + booking.totalCost, 0);
    }

    getRoomTypesCount(): void {
        const counter = this.rooms.reduce<Record<string, number>>((acc, room) => {
            acc[room.type] = (acc[room.type] || 0) + 1;
            return acc;
        }, {});

        let message = "Thống kê số lượng từng loại phòng:\n";
        for (const type in counter) {
            message += `${type}: ${counter[type]} phòng\n`;
        }
        alert(message);
    }

    applyDiscountToRoom(roomId: number, discountRate: number): void {
        const roomIndex = this.rooms.findIndex(room => room.roomId === roomId);
        if (roomIndex === -1) {
            alert("Không tìm thấy phòng!");
            return;
        }

        if (discountRate < 0 || discountRate > 100) {
            alert("Tỷ lệ giảm giá không hợp lệ!");
            return;
        }

        const room = this.rooms[roomIndex];
        const originalPrice = room.pricePerNight;
        room.pricePerNight = originalPrice * (1 - discountRate / 100);
        alert(`Đã giảm giá phòng #${roomId} từ ${originalPrice}đ xuống ${room.pricePerNight}đ (giảm ${discountRate}%)`);
    }

    getRoomServices(roomId: number): void {
        const room = this.rooms.find(r => r.roomId === roomId);
        if (!room) {
            alert("Không tìm thấy phòng!");
            return;
        }

        const services = room.getAdditionalServices();
        if (services.length === 0) {
            alert(`Phòng #${roomId} không có dịch vụ bổ sung`);
        } else {
            alert(`Dịch vụ bổ sung của phòng #${roomId}:\n${services.join(", ")}`);
        }
    }

    getCancellationPolicy(roomId: number): void {
        const room = this.rooms.find(r => r.roomId === roomId);
        if (!room) {
            alert("Không tìm thấy phòng!");
            return;
        }

        alert(`Chính sách hủy phòng #${roomId}:\n${room.getCancellationPolicy()}`);
    }
}

const hotelManager = new HotelManager();

let running = true;
while (running) {
    let choice = prompt(
        `=== MENU QUẢN LÝ KHÁCH SẠN ===
1) Thêm khách hàng
2) Thêm phòng
3) Đặt phòng
4) Trả phòng
5) Hiển thị danh sách phòng còn trống
6) Hiển thị danh sách đặt phòng của khách hàng
7) Tính tổng doanh thu
8) Đếm số lượng từng loại phòng
9) Áp dụng giảm giá cho phòng
10) Hiển thị các dịch vụ bổ sung của phòng
11) Hiển thị chính sách hủy phòng
12) Thoát chương trình
Chọn: `
    );

    switch (choice) {
        case "1": {
            const name = prompt("Tên khách hàng: ")?.trim() || "";
            const email = prompt("Email: ") || "";
            const phone = prompt("Số điện thoại: ") || "";
            
            if (!name || !email || !phone) {
                alert("Thiếu thông tin khách hàng!");
            } else {
                const customer = hotelManager.addCustomer(name, email, phone);
                if (customer) {
                    alert(`Đã thêm khách hàng: ${customer.getDetails()}`);
                }
            }
            break;
        }
        case "2": {
            const type = prompt("Loại phòng (S-Standard/D-Deluxe/SU-Suite): ")?.toUpperCase() || "";
            const price = Number(prompt("Giá mỗi đêm: "));
            
            if (!type || isNaN(price) || price <= 0) {
                alert("Thông tin phòng không hợp lệ!");
            } else {
                hotelManager.addRoom(type, price);
            }
            break;
        }
        case "3": {
            const customerId = Number(prompt("ID khách hàng: "));
            const roomId = Number(prompt("ID phòng: "));
            const nights = Number(prompt("Số đêm: "));
            
            if (isNaN(customerId) || isNaN(roomId) || isNaN(nights)) {
                alert("Thông tin đặt phòng không hợp lệ!");
            } else {
                hotelManager.bookRoom(customerId, roomId, nights);
            }
            break;
        }
        case "4": {
            const roomId = Number(prompt("ID phòng cần trả: "));
            if (isNaN(roomId)) {
                alert("ID phòng không hợp lệ!");
            } else {
                hotelManager.releaseRoom(roomId);
            }
            break;
        }
        case "5": {
            hotelManager.listAvailableRooms();
            break;
        }
        case "6": {
            const customerId = Number(prompt("ID khách hàng: "));
            if (isNaN(customerId)) {
                alert("ID khách hàng không hợp lệ!");
            } else {
                hotelManager.listBookingsByCustomer(customerId);
            }
            break;
        }
        case "7": {
            const totalRevenue = hotelManager.calculateTotalRevenue();
            alert(`Tổng doanh thu: ${totalRevenue}đ`);
            break;
        }
        case "8": {
            hotelManager.getRoomTypesCount();
            break;
        }
        case "9": {
            const roomId = Number(prompt("ID phòng: "));
            const discountRate = Number(prompt("Tỷ lệ giảm giá (%): "));
            
            if (isNaN(roomId) || isNaN(discountRate)) {
                alert("Thông tin không hợp lệ!");
            } else {
                hotelManager.applyDiscountToRoom(roomId, discountRate);
            }
            break;
        }
        case "10": {
            const roomId = Number(prompt("ID phòng: "));
            if (isNaN(roomId)) {
                alert("ID phòng không hợp lệ!");
            } else {
                hotelManager.getRoomServices(roomId);
            }
            break;
        }
        case "11": {
            const roomId = Number(prompt("ID phòng: "));
            if (isNaN(roomId)) {
                alert("ID phòng không hợp lệ!");
            } else {
                hotelManager.getCancellationPolicy(roomId);
            }
            break;
        }
        case "12": {
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
