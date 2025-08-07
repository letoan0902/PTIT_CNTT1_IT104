type Product = {
    id: string;
    name: string;
    price: number;
    category: {
       id: string;
       name: string;
    };
    discount?: number;
};

let listProduct:Product[]=[
    {
        id: "001",
        name: "Áo sơ mi",
        price: 120000,
        category: {
            id: "T001",
            name: "Thời trang nam"
        },
        discount: 20000
    },
    {
        id: "002",
        name: "Áo gió nam",
        price: 300000,
        category: {
            id: "T002",
            name: "Áo khóac"
        }
    },
    {
        id: "003",
        name: "Áo kẻ sọc nữ",
        price: 250000,
        category: {
            id: "T003",
            name: "Thời trang nữ"
        },
        discount: 53000
    }
]

const getFinalPrice=(product:Product)=>{
    if(product.discount){
        return product.price-product.discount
    }
    return product.price
}

const printProductInfo=(product:Product)=>{
    console.log(`Tên: ${product.name}
Giá gốc: ${product.price}
${product.discount?"Giá sau giảm: "+getFinalPrice(product)+"\n":""}Danh mục: ${product.category.name}`);
    
}

for (const element of listProduct) {
    printProductInfo(element);
}
