import { Modal, Form, Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useCustomerRedux";
import { closeModalEdit } from "../slices/modalEditManager";
import { useEffect } from "react";
import type { Book } from "../interface/book.interface";
import { updateBook } from "../apis/book.api";

export default function ModalEditBook() {
  const modalEditData = useAppSelector((state) => state.modalEdit);
  const bookList = useAppSelector((state) => state.books.data);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  // Fill dữ liệu khi mở modal
  useEffect(() => {
    if (modalEditData.isModalEditOpen && modalEditData.bookEdit) {
      form.setFieldsValue({
        title: modalEditData.bookEdit.title,
        author: modalEditData.bookEdit.author,
        year: modalEditData.bookEdit.year,
        category: modalEditData.bookEdit.category,
      });
    }
  }, [modalEditData.isModalEditOpen, modalEditData.bookEdit, form]);

  const handleCancel = () => {
    dispatch(closeModalEdit());
    form.resetFields();
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      // Kiểm tra tiêu đề sách không trùng, bỏ qua sách đang sửa
      const checkBookTitle = bookList.some(
        (book) =>
          book.title.trim().toLowerCase() ===
            values.title.trim().toLowerCase() &&
          book.id !== modalEditData.bookEdit?.id
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

      const newBook: Book = {
        ...modalEditData.bookEdit,
        title: values.title,
        author: values.author,
        year: Number(values.year),
        category: values.category,
      };
      console.log(newBook);

      dispatch(updateBook(newBook));
      handleCancel();
    });
  };

  return (
    <>
      <Modal
        open={modalEditData.isModalEditOpen}
        onCancel={handleCancel}
        footer={null}
        title="Edit Book"
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
            <Button type="primary" onClick={handleUpdate}>
              SAVE
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
