import { Modal, Form, Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useCustomerRedux";
import { closeModalAdd } from "../slices/modalAddManager";
import { addBook } from "../apis/book.api";
import type { Book } from "../interface/book.interface";

export default function ModalAddBook() {
  const isModalOpen = useAppSelector((state) => state.modalAdd.isModalAddOpen);
  const bookList = useAppSelector((state) => state.books.data);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const handleCancel = () => {
    dispatch(closeModalAdd());
    form.resetFields();
  };

  const handleAdd = () => {
    form.validateFields().then((values) => {
      // Kiểm tra tiêu đề sách không trùng
      const checkBookTitle = bookList.some(
        (book) =>
          book.title.trim().toLowerCase() === values.title.trim().toLowerCase()
      );
      if (checkBookTitle) {
        form.setFields([
          {
            name: "title",
            errors: ["Tiêu đề sách đã tồn tại!"],
          },
        ]);
        return;
      }

      console.log("Book Added:", values);
      const newBook: Book = {
        title: values.title,
        author: values.author,
        year: Number(values.year),
        category: values.category,
      };
      console.log(newBook);

      dispatch(addBook(newBook));
      handleCancel();
    });
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        title="Add Book"
        centered
        width={600}
      >
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title không được để trống" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Author không được để trống" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Year không được để trống" }]}
          >
            <Input size="large" type="number" />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              { required: true, message: "Category không được để trống" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
            <Button onClick={handleCancel}>CANCEL</Button>
            <Button type="primary" onClick={handleAdd}>
              ADD
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
