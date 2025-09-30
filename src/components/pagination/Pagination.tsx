import React from 'react';
import type { PaginationProps } from '../../types';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import './Pagination.css';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = '',
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  const generatePageNumbers = () => {
    const pages: Array<number | 'ellipsis'> = [];
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate start and end of visible range
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      // Adjust start if end is at the limit
      if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
      
      // Add first page and ellipsis if needed
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('ellipsis');
        }
      }
      
      // Add visible pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add last page and ellipsis if needed
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('ellipsis');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const paginationClasses = [
    'paper-pagination',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={paginationClasses} role="navigation" aria-label="Pagination">
      {showFirstLast && (
        <IconButton
          icon={<FaAngleDoubleLeft />}
          size="small"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="Go to first page"
        />
      )}
      
      {showPrevNext && (
        <IconButton
          icon={<FaAngleLeft />}
          size="small"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        />
      )}
      
      <div className="paper-pagination__pages">
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="paper-pagination__ellipsis">
                ...
              </span>
            );
          }
          
          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;
          
          return (
            <Button
              key={pageNumber}
              size="small"
              variant={isActive ? 'primary' : 'outline'}
              onClick={() => handlePageChange(pageNumber)}
              className="paper-pagination__page"
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
      
      {showPrevNext && (
        <IconButton
          icon={<FaAngleRight />}
          size="small"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        />
      )}
      
      {showFirstLast && (
        <IconButton
          icon={<FaAngleDoubleRight />}
          size="small"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
        />
      )}
    </div>
  );
};
