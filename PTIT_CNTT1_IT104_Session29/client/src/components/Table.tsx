import React, { useEffect, useState } from 'react';
import { Divider, Radio, Table, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps } from 'antd';
import axios from 'axios';

interface DataType {
  key: React.Key;
  id: number;
  student_name: string;
  email: string;
  phone: string;
  address: string;
  status: boolean;
  create_at: string;
}


const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.student_name === 'Disabled User',
    name: record.student_name,
  }),
};

const App: React.FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [data, setData] = useState<DataType[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/students');
      const dataWithKeys = response.data.map((item: any) => ({
        ...item,
        key: item.id
      }));
      setData(dataWithKeys);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  };

  const handleEdit = async (record: DataType) => {
    try {
      console.log('Chỉnh sửa sinh viên:', record);
      alert(`Chỉnh sửa sinh viên: ${record.student_name}\nChức năng này cần thêm form chỉnh sửa`);
    } catch (error) {
      console.error('Lỗi khi chỉnh sửa:', error);
    }
  };

  const handleDelete = async (record: DataType) => {
    try {
      if (window.confirm(`Bạn có chắc chắn muốn xóa sinh viên "${record.student_name}"?`)) {
        const response = await axios.delete(`http://localhost:3002/students/${record.id}`);
        if (response.status === 200) {
          console.log('Xóa sinh viên thành công');
          await fetchData();
        }
      }
    } catch (error) {
      console.error('Lỗi khi xóa:', error);
      alert('Có lỗi xảy ra khi xóa sinh viên');
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Tên sinh viên',
      dataIndex: 'student_name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Lựa chọn',
      dataIndex: 'action',
      render: (_, record: DataType) => (
        <Space size="middle">
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            size="small"
            onClick={() => handleEdit(record)}
          >
            Sửa
          </Button>
          <Button 
            type="primary" 
            danger 
            icon={<DeleteOutlined />} 
            size="small"
            onClick={() => handleDelete(record)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Radio.Group onChange={(e) => setSelectionType(e.target.value)} value={selectionType}>

      </Radio.Group>
      <Divider />
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default App;

