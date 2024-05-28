type PaginationProps = {
    currentPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    onPageChange: (page: number) => void;
  };
  
  export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    isFirstPage,
    isLastPage,
    onPageChange,
  }) => {
    return (
      <div>
        {!isFirstPage && (
          <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        )}
        <span>Page {currentPage}</span>
        {!isLastPage && (
          <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    );
  };
  