import type { Product } from "../interfaces/listProducts.interface";
import type { ActionType } from "../stores/store";
const products: Product[] = [
    {
        id: 1,
        name: "Pizza",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut delenitil",
        price: 30,
        quantity: 1,
        image: "https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FPesto%20H%E1%BA%A3i%20S%E1%BA%A3n._20250317172201GL5.webp&w=1170&q=75"
    },
    {
        id: 2,
        name: "Hamburger",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut delenitil",
        price: 15,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Qq1rV_svdydH5u3O8r5ZmT8udMBnSuKeA&s"
    },
    {
        id: 3,
        name: "Bread",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut delenitil",
        price: 20,
        quantity: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
    },
    {
        id: 4,
        name: "Cake",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut delenitil",
        price: 10,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fPXtTIh9c-xU0_S6c27WrFfSeGZIMZDJ7w&s"
    }
]

export const listProductsReducer = (state = products, _action: ActionType) => {
    return state;
}