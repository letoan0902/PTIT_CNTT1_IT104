import React, { useState } from 'react'
import { Button, Input, Checkbox } from 'antd'
import type { CheckboxProps } from 'antd'

interface NewProduct {
  name: string;
  price: number;
  inStock: boolean;
}

interface AddProductProps {
  onAddProduct: (product: NewProduct) => void;
}

export default function AddProduct({ onAddProduct }: AddProductProps) {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [inStock, setInStock] = useState<boolean>(true);

  const handleCheckboxChange: CheckboxProps['onChange'] = (e) => {
    setInStock(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!productName.trim()) {
      alert('Vui lòng nhập tên sản phẩm!');
      return;
    }
    
    if (!productPrice.trim() || isNaN(Number(productPrice))) {
      alert('Vui lòng nhập giá sản phẩm hợp lệ!');
      return;
    }

    const newProduct = {
      name: productName.trim(),
      price: Number(productPrice),
      inStock: inStock
    };

    onAddProduct(newProduct);

    setProductName('');
    setProductPrice('');
    setInStock(true);
  };

  return (
    <div className='bg-white mt-6 w-full h-30 flex flex-col rounded-2xl justify-center items-center shadow-md p-6'>
      <h2 className='text-xl font-medium mb-4'>➕ Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className='flex items-center gap-4'>
        <Input 
          className='!w-70' 
          placeholder="Tên sản phẩm" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input 
          className='!w-40' 
          placeholder="Giá (đ)" 
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div className='flex justify-center items-center rounded-md border-1 p-1 pl-2 pr-2 h-8 border-gray-300'>
          <Checkbox 
            className='font-medium' 
            checked={inStock}
            onChange={handleCheckboxChange}
          >
            Còn hàng
          </Checkbox>
        </div>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </form>
    </div>
  )
}
