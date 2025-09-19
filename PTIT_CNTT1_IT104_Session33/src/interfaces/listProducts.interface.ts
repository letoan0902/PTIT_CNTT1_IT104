export interface Product {
    id: number;
    name: string;
    detail: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}