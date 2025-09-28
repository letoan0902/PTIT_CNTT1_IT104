import { Card, Typography, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hook/useCustomerRedux";
import { useEffect } from "react";
import { getAllBooks } from "../apis/book.api";
import Loading from "./Loading";
import type { Book } from "../interface/book.interface";
import { openModalDelete } from "../slices/modalDeleteManager";
import { openModalEdit } from "../slices/modalEditManager";

const { Title, Text } = Typography;

export default function BookList() {
  const bookData = useAppSelector((state) => state.books);
  const filterBookData = useAppSelector((state) => state.filterBook);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (bookData.status === "pending") {
    return <Loading />;
  }

  const openModalDeleteBook = (book: Book) => {
    dispatch(openModalDelete(book));
  };
  const openModalEditBook = (book: Book) => {
    dispatch(openModalEdit(book));
  };

  const filterBook = () => {
    let filtered: Book[] = [...bookData.data];

    if (filterBookData.inputSearch) {
      filtered = filtered.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(filterBookData.inputSearch.toLowerCase()) ||
          book.author
            .toLowerCase()
            .includes(filterBookData.inputSearch.toLowerCase())
      );
    }

    if (filterBookData.category && filterBookData.category !== "All") {
      filtered = filtered.filter(
        (book) => book.category === filterBookData.category
      );
    }

    switch (filterBookData.sort) {
      case "az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year-desc":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        filtered.sort((a, b) => a.year - b.year);
        break;
      default:
        break;
    }
    return filtered;
  };

  return (
    <Row gutter={[16, 16]}>
      {filterBook().map((book) => (
        <Col xs={24} md={12} key={book.id}>
          <Card
            style={{ marginBottom: 16 }}
            actions={[
              <EditOutlined
                key="edit"
                onClick={() => openModalEditBook(book)}
              />,
              <DeleteOutlined
                key="delete"
                onClick={() => openModalDeleteBook(book)}
              />,
            ]}
          >
            <Title level={4} style={{ margin: 0 }}>
              {book.title}
            </Title>
            <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
              {book.author} • {book.year} • {book.category}
            </Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
