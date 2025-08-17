import React from 'react';
import type { TableProps, TableHeaderProps, TableRowProps, TableCellProps } from '../../types';
import './Table.css';

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <th className={`paper-table-header ${className}`}>
      {children}
    </th>
  );
};

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className = '',
}) => {
  return (
    <tr className={`paper-table-row ${className}`}>
      {children}
    </tr>
  );
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = '',
}) => {
  return (
    <td className={`paper-table-cell ${className}`}>
      {children}
    </td>
  );
};

export const Table: React.FC<TableProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  const tableClasses = [
    'paper-table',
    `paper-table--${variant}`,
    `paper-table--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-table-wrapper">
      <table className={tableClasses}>
        {children}
      </table>
    </div>
  );
};
