import LibraryHeader from "../components/LibraryHeader";
import BookFilterBar from "../components/BookFilterBar";
import ModalAddBook from "../components/ModalAddBook";
import BookList from "../components/BookList";
import ButtonAddBook from "../components/ButtonAddBook";
import ModalDeleteBook from "../components/ModalDeleteBook";
import ModalEditBook from "../components/ModalEditBook";

export default function BookLibraryManager() {
  return (
    <div style={{ background: "#f9fafc" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "32px 24px",
          background: "#f9fafc",
          minHeight: "100vh",
        }}
      >
        <LibraryHeader />

        <ButtonAddBook />

        <div
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 2px 8px #eee",
            marginBottom: 32,
          }}
        >
          <BookFilterBar />
        </div>

        <BookList />
      </div>
      <ModalAddBook />

      <ModalDeleteBook />

      <ModalEditBook />
    </div>
  );
}
