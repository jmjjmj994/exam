import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
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
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    scrollToTop();
  }, [currentPage]);
  return (
    <div className=" flex items-center justify-center py-10 pb-10 gap-40">
      {!isFirstPage && (
        <button
          className="mr-6 bg-black/80 py-4 px-4 rounded-full text-white flex items-center justify-center"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowLeft size={25} aria-label="arrow-left" />
        </button>
      )}

      {!isLastPage && (
        <button
          className="ml-6 bg-black/80 py-4 px-4 rounded-full text-white flex items-center justify-center"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ArrowRight size={25} aria-label="arrow right" />
        </button>
      )}
    </div>
  );
};
