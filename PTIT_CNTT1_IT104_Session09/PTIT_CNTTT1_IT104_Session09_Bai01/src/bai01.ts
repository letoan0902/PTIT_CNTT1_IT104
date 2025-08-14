class Customer {
    static _nextId:number=1;
    id: number;
    name: string;
    email:string;
    shippingAddress:string;

    constructor(
    name: string,
    email:string,
    shippingAddress:string){
        this.id=Customer._nextId++;
        this.name=name;
        this.email=email;
        this.shippingAddress=shippingAddress;
    }

    getDetail(){
        return `#${this.id} - ${this.name} | ${this.email} | Đ/c: ${this.shippingAddress}`;
    }
}

abstract class Product {
    static _nextId:number=1;
    id: number;
    name:string;
    price:number;
    stock:number;

    constructor(name:string,price:number,stock:number){
        this.id=Product._nextId++;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }

    sell(quantity:number){
        if(this.stock<quantity){
            alert("Vượt quá số hàng đang có");
        } else {
            this.stock-=quantity;
        }
    }

    restock(quantity:number){
        this.stock+=quantity;
    }

    abstract getProductInfo():string;
    abstract getShippingCost(distance:number):number;
    abstract getCategory():string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod:number;
    constructor(name:string,price:number,stock:number,warrantyPeriod:number){
        super(name,price,stock);
        this.warrantyPeriod=warrantyPeriod;
    }

    getProductInfo(): string {
        return `[Electronics] ${this.name} | Giá: ${this.price}đ | BH: ${this.warrantyPeriod} tháng | Tồn kho: ${this.stock}` 
    }

    getShippingCost(distance: number): number {
        return 50000;
    }

    getCategory(): string {
        return "Electronics"
    }
}

class ClothingProduct extends Product {
    size:string;
    color:string;
    constructor(name: string,
    price: number,
    stock: number,
    size: string,
    color: string){
        super(name,price,stock);
        this.size=size;
        this.color=color;
    }

    getProductInfo(): string {
        return `[Clothing] ${this.name} | Size: ${this.size} | Màu: ${this.color} | Giá: ${this.price}đ | Tồn kho: ${this.stock}` 
    }

    getShippingCost(distance: number): number {
        return 25000;
    }
    
    getCategory(): string {
        return "Clothing"
    }
}

type OrderLine = {
    product:Product;
    quantity:number
}

class Order {
    static nextId=1;
    orderId:number;
    customer:Customer;
    products:OrderLine[];
    totalAmount:number;

    constructor(customer:Customer,lines:OrderLine[]){
        this.orderId=Order.nextId++;
        this.customer=customer;
        this.products=lines;
        this.totalAmount=this.products.reduce((sum,line)=>sum+line.product.price*line.quantity,0);
    }

    getDetail():string{
        const items=this.products.map((line)=> `- (${line.product.getCategory()}) ${line.product.name} x${line.quantity} = ${line.product.price*line.quantity}đ`).join("\n");
        return `Đơn #${this.orderId} | KH: ${this.customer.name}\n${items}\nTổng: ${this.totalAmount}đ`
    }
}

class Store{
    products:Product[]=[];
    customers:Customer[]=[];
    orders:Order[]=[];

    findEntityById <T extends {id:number}>(collection: T[], id:number): T | undefined {
        return collection.find(e=>e.id===id);
    }

    addProducts(product:Product):void{
        this.products.push(product);
    }

    addCustomer(name:string, email:string, address:string):Customer{
        const c= new Customer(name,email,address);
        this.customers.push(c);
        return c;
    }

    createOrder(
        customerId:number,
        productQuantities:{
            productId: number;
            quantity:number
        }[]):Order | null {
            const customer = this.findEntityById(this.customers,customerId);
            if(!customer){
                alert("Không thấy khách hàng");
                return null;
            }

            const lines:OrderLine[]=[];
            for (const pq of productQuantities) {
                const p = this.findEntityById(this.products,pq.productId);
                if(!p){
                    alert(`Không tìm thấy sản phẩm ${pq.productId}`);
                    return null;
                }
                if(pq.quantity<=0||pq.quantity>p.stock){
                    alert(` Số lượng không hợp lệ`);
                    return null;
                }
                lines.push({
                    product:p,
                    quantity:pq.quantity
                });
            }

            lines.forEach(l=>l.product.sell(l.quantity));

            const order = new Order(customer,lines);
            this.orders.push(order);
            return order;
        }

        cancelOrder(orderId:number):void{
            const idx = this.orders.findIndex(o=>o.orderId===orderId);
            if(idx===-1){
                alert("Không tìm thấy đơn hàng");
                return;
            }

            this.orders[idx].products.forEach(l=>l.product.restock(l.quantity))
            this.orders.splice(idx,1);
            alert(`Đã hủy đơn hàng #${orderId} và hoàn kho`);
        }

        listAvailableProducts():void{
            const aval=this.products.filter(p=>p.stock>0);
            if(aval.length===0) return alert("Không còn hàng");
            aval.forEach(p=>alert(`#${p.id} | ${p.getProductInfo()}`));
        }

        listCustomerOrders(customerId:number):void{
            const list = this.orders.filter(o=>o.customer.id===customerId);
            if(!list.length) return alert("Khách hàng chưa có đơn nào");
            list.forEach(o=>alert(o.getDetail() + "\n"));
        }

        caculateTotalRevenue():number{
            return this.orders.reduce((sum,o)=>sum+o.totalAmount,0);
        }

        countProductByCategory(){
            const counter = this.products.reduce<Record<string,number>>((acc,p)=>{
                const cat = p.getCategory();
                acc[cat]=(acc[cat]??0)+1;
                return acc;
            },{});
            alert("Thống kê theo danh mục:\n" + JSON.stringify(counter, null, 2));
        }

        updateProductStock(productId:number,newStock:number):void{
            const idx = this.products.findIndex(p=>p.id===productId);
            if(idx===-1) return alert("Không tìm thấy sản phẩm");
            this.products[idx].stock=newStock;
            alert(`Đã cập nhật tồn kho #${productId} = ${newStock}`);
        }

        showProductDetail(productId:number):void{
            const p = this.products.find(x=>x.id===productId);
            if(!p) return alert("Không tìm thấy sản phẩm");
            alert(`${p.getProductInfo()} | Ship: ${p.getShippingCost(0)}`);
        }
}

const store=new Store();
let a=1;
while(a>0){
    let choice = prompt(
        `=== MENU E-COMMERCE ===
        1) Thêm khách hàng
        2) Thêm sản phẩm (Electronics/Clothing)
        3) Tạo đơn hàng
        4) Hủy đơn hàng
        5) Hiển thị sản phẩm còn hàng
        6) Hiển thị đơn hàng của khách
        7) Tính tổng doanh thu
        8) Thống kê sản phẩm theo danh mục
        9) Cập nhật tồn kho sản phẩm
        10) Tìm theo ID (Customer/Product)
        11) Xem chi tiết sản phẩm
        0) Thoát
        Chọn: `
    );

    switch(choice){
        case "1": {
            const name = prompt("Tên khách hàng? ")?.trim()||"";
            const email = prompt("Email: ");
            const address=prompt("Địa chỉ: ");
            if(!name||!email||!address){
                alert('Thiếu thông tin')
            } else {
                store.addCustomer(name,email,address);
            }
            break;
        }
        case "2":{
            const type = prompt("Loại sản phẩm (E/C): ")?.toUpperCase();
            const name = String(prompt('Tên sản phẩm: ')?.trim());
            const price = Number(prompt("Giá: "));
            const stock = Number(prompt("Tồn kho: "));
            if(type==="E"){
                const warranty = Number(prompt("Bảo hành (Tháng): "))
                store.addProducts(new ElectronicsProduct(name,price,stock,warranty));
            } else if(type==="C"){
                const size=String(prompt("Size: ")?.trim());
                const color = String(prompt("Màu: ")?.trim());
                store.addProducts(new ClothingProduct(name,price,stock,size,color));
            } else {
                alert("Loại không hợp lệ");
            }
            break;
        }
        case "3":{
            const customerId=Number(prompt("Nhập ID: "));
            const raw=String(prompt("Nhập danh sách sản phẩm theo định dạng: productId:quantity, cách nhau bởi dấu phẩy\n Ví dụ: 1:2,3:1"));
            const item=raw.split(",").map(s=>s.trim()).filter(Boolean).map(pair=>{
                const [pid, qty]=pair.split(":").map(x=>Number(x));
                return {
                    productId: pid,
                    quantity: qty
                }
            })
            store.createOrder(customerId,item);
            break;
        }
        case "4": {
            const orderId =Number(prompt("Nhập mã đơn cần hủy: "));
            store.cancelOrder(orderId);
            break;
        }
        case "5":{
            store.listAvailableProducts();
            break;
        }
        case "6":{
            const customerId=Number(prompt("ID khách hàng: "));
            store.listCustomerOrders(customerId);
            break;
        }
        case "7":
            const total = store.caculateTotalRevenue();
            alert("Tổng doanh thu: "+total+"đ")
            break;
        case "8":
            store.countProductByCategory();
            break;
        case "9":
            const productId=Number(prompt("ID sản phẩm: "));
            const newStock = Number(prompt("Tồn kho mới: "));
            store.updateProductStock(productId,newStock);
            break;
        case "10":{
            const kind = String(prompt("Tìm Customer hay Product? (C)/(P)")).toUpperCase();
            const id = Number(prompt("Nhập ID: "));
            if(kind === "C"){
                const c=store.findEntityById(store.customers,id);
                alert(c?c.getDetail():'Không tìm thấy khách hàng');
            } else if(kind==="P"){
                const p = store.findEntityById(store.products,id);
                alert(p?p.getProductInfo():"Không tìm thấy sản phẩm");
            } else {
                alert("Lựa chọn không hợp lệ")
            }
            break;
        }
        case "11":{
            const id=Number(prompt("ID sản phẩm: "));
            store.showProductDetail(id);
            break;
        }
        case "0":
            if(confirm('Thoát chương trình?')){
                a=0;
            }
            break;
        default:
            alert('Lựa chọn không hợp lệ')
    }
}
