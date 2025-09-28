import { Modal, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useCustomerRedux";
import { closeModalDelete } from "../slices/modalDeleteManager";
import { deleteBook } from "../apis/book.api";

export default function ModalDeleteBook() {
  const deleteBookData = useAppSelector((state) => state.modalDelete);
  const dispatch = useAppDispatch();

  console.log(deleteBookData);

  const handleCancel = () => {
    dispatch(closeModalDelete());
  };

  const handleDelete = () => {
    if (deleteBookData.bookDelete) {
      dispatch(deleteBook(deleteBookData.bookDelete));
      handleCancel();
    } else {
      handleCancel();
    }
  };

  return (
    <Modal
      title="Basic Modal"
      closable={{ "aria-label": "Custom Close Button" }}
      open={deleteBookData.isModalDeleteOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" type="default" onClick={handleCancel}>
          Huỷ
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleDelete}>
          XÓA
        </Button>,
      ]}
    >
      <p>Bạn có chắc chắn muốn xoá sách không</p>
    </Modal>
  );
}
