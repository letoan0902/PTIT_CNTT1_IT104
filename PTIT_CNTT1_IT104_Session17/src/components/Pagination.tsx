import "./App.css"
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => onPageChange && onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}