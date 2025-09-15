import { useState, useEffect } from 'react'
import "./App.css"
import AddProduct from './AddProduct'
import TableProduct from './TableProduct'

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts);
      if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
        setProducts(parsedProducts);
      } else {
        initializeDefaultProducts();
      }
    } else {
      initializeDefaultProducts();
    }
    setIsInitialized(true);
  }, []);

  const initializeDefaultProducts = () => {
    const initialProducts: Product[] = [
      {
        id: '1',
        name: 'Laptop Dell XPS 13',
        price: 29990000,
        inStock: true,
      },
      {
        id: '2',
        name: 'Chuột Logitech MX Master 3S',
        price: 2490000,
        inStock: false,
      },
      {
        id: '3',
        name: 'Bàn phím Keychron K6',
        price: 2190000,
        inStock: true,
      },
    ];
    setProducts(initialProducts);
    localStorage.setItem('products', JSON.stringify(initialProducts));
  };

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products, isInitialized]);

  const handleAddProduct = (newProduct: { name: string; price: number; inStock: boolean }) => {
    const product: Product = {
      name: newProduct.name,
      price: newProduct.price,
      inStock: newProduct.inStock,
      id: Math.floor(Math.random() * 10000000).toString(),
    };
    
    setProducts(prevProducts => [...prevProducts, product]);
  };

  return (
    <div className='w-[100vw] h-[100vh] px-3 pt-3 bg-amber-50'>
      <div className='shadow-md shadow-blue-200 w-full h-30 flex flex-col bg-blue-500 rounded-2xl justify-center items-center'>
        <span className='text-4xl'>📦</span>
        <h3 className='font-bold text-white text-2xl'>Quản lý Sản phẩm</h3>
      </div>

      <AddProduct onAddProduct={handleAddProduct} />

      <TableProduct
        allProducts={products}
        onUpdateProducts={setProducts}
      />
    </div>
  )
}