import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "./ui/pagination";

export function CustomPagination({
  total,
  limit,
  setLimit,
  setPage,
  page
}: {
  total: number;
  limit: number;
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
  page: number;
}) {
  const totalPages = Math.ceil(total / limit);
  const currentPage = page;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage);
            }}
            isActive={true}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 1 <= totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 2 <= totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 2);
              }}
            >
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 3 < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(totalPages);
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
