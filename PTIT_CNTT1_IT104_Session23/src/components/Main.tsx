// import React from 'react'
import "./App.css"
// import AddProduct from './AddProduct'
// import TableProduct from './TableProduct'
import { Button, Input } from 'antd';
import type { CheckboxProps } from 'antd';
import { Checkbox } from 'antd'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  price: number;
  status: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p className="font-medium" >{text}</p>,
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
    render:(price)=><p className="font-medium text-green-600">{price}đ</p>
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((st,index) => {
          const color = st === 'Còn hàng' ? 'green' : 'volcano';
          if(index>0){
            return;
          }
          return (
            <Tag className="font-medium" color={color} key={st}>
              {st}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button color="primary" variant="outlined">
            Đánh dấu
          </Button>
        <Button color="danger" variant="outlined">
            Xóa
          </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Laptop Dell XPS 13',
    price: 29990000,
    status: ['Hết hàng'],
  },
  {
    key: '2',
    name: 'Chuột Logitech MX Master 3S',
    price: 2490000,
    status: ['Hết hàng', 'Còn hàng'],
  },
  {
    key: '3',
    name: 'Bàn phím Keychron K6',
    price: 2190000,
    status: ['Còn hàng'],
  },
];



export default function Main() {
    const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
  return (
    <div className='w-[100vw] h-[100vh] px-3 pt-3 bg-amber-50'>
        <div className='shadow-md shadow-blue-200 w-full h-30 flex flex-col bg-blue-500 rounded-2xl justify-center items-center'><span className='text-4xl'>📦</span><h3 className='font-bold text-white text-2xl'>Quản lý Sản phẩm</h3></div>
        <div className='bg-white mt-6 w-full h-30 flex flex-col rounded-2xl justify-center items-center shadow-md'>
            <h2 className='text-xl font-medium mb-4'>➕ Thêm sản phẩm mới</h2>
            <form action="" className='flex '>
                <Input className='!mr-4 !w-70' placeholder="Tên sản phẩm" />
                <Input className='!mr-4 !w-40' placeholder="Giá (đ)" />
                <div className='flex justify-center items-center mr-4 rounded-md border-1 p-1 pl-2 pr-2 h-8 border-gray-300'>
                    <Checkbox className='font-medium' onChange={onChange}>Còn hàng</Checkbox>
                </div>
                <Button type="primary">Thêm</Button>
            </form>
        </div>
        <div className="bg-white mt-6 w-full flex flex-col rounded-2xl justify-center items-center shadow-md p-6">
            <h1 className="text-xl font-medium mb-6"> 📋 Danh sách sản phẩm</h1>
            <Table<DataType> columns={columns} dataSource={data} className="w-full" />
        </div>
    </div>
  )
}
