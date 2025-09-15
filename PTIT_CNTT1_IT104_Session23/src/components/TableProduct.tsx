import { Button, Space, Table, Tag, Pagination, Modal } from 'antd'
import type { TableProps } from 'antd'
import { useState } from 'react'

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface TableProductProps {
  allProducts: Product[];
  onUpdateProducts: (products: Product[]) => void;
}

export default function TableProduct({ allProducts, onUpdateProducts }: TableProductProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handleMarkProduct = (id: string) => {
    const newProducts = allProducts.map(product =>
      product.id === id ? { ...product, inStock: !product.inStock } : product
    );
    onUpdateProducts(newProducts);
  };

  const handleDeleteProduct = (id: string) => {
    const product = allProducts.find(p => p.id === id);
    if (product) {
      setProductToDelete(product);
      setIsDeleteModalVisible(true);
    }
  };

  const confirmDelete = () => {
    if (productToDelete) {
      const newProducts = allProducts.filter(product => product.id !== productToDelete.id);
      onUpdateProducts(newProducts);
      setIsDeleteModalVisible(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalVisible(false);
    setProductToDelete(null);
  };

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size && size !== pageSize) {
      setPageSize(size);
      setCurrentPage(1);
    }
  };

  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <p 
          className={`font-medium ${
            record.inStock ? 'text-black' : 'text-gray-500 line-through'
          }`}
        >
          {text}
        </p>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <p className="font-medium text-green-600">
          {price.toLocaleString('vi-VN')} đ
        </p>
      )
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'inStock',
      render: (inStock) => {
        const status = inStock ? 'Còn hàng' : 'Hết hàng';
        const color = inStock ? 'green' : 'volcano';
        return (
          <Tag className="font-medium" color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            color="primary" 
            variant="outlined"
            onClick={() => handleMarkProduct(record.id)}
          >
            Đánh dấu
          </Button>
          <Button 
            color="danger" 
            variant="outlined"
            onClick={() => handleDeleteProduct(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white mt-6 w-full flex flex-col rounded-2xl justify-center items-center shadow-md p-6">
      <h1 className="text-xl font-medium mb-6">📋 Danh sách sản phẩm</h1>
      
      <Table<Product> 
        columns={columns} 
        dataSource={currentProducts} 
        className="w-full mb-4"
        pagination={false}
        rowKey="id"
      />
      
      <div className="w-full flex justify-between items-center mt-4">
        <div className="text-gray-600 font-medium">
          Tổng: {allProducts.length} sản phẩm
        </div>
        
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={allProducts.length}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={['3', '5', '10', '20']}
          showTotal={(total) => 
            `Tổng: ${total} sản phẩm`
          }
        />
      </div>

      <Modal
        title="Xác nhận xóa sản phẩm"
        open={isDeleteModalVisible}
        onOk={confirmDelete}
        onCancel={cancelDelete}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <p>
          Bạn có chắc chắn muốn xóa sản phẩm{' '}
          <strong>"{productToDelete?.name}"</strong> không?
        </p>
      </Modal>
    </div>
  )
}