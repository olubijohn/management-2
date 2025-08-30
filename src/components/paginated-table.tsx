"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export type Column<T> = {
  header: string;
  accessor: keyof T;
  renderCell?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
};

interface PaginatedTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowsPerPage?: number;
  shadow?: boolean;
}

export function PaginatedTable<T extends object>({
  columns,
  data,
  rowsPerPage = 10,
  shadow = false
}: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  // Split columns
  const firstCol = columns[0];
  const restCols = columns.slice(1);

  return (
    <>
    <div className="flex w-full">
      {/* Fixed first column */}
      <div className={`bg-white rounded-bl-lg border-gray-200 ${shadow && "border-r shadow-[2px_0_24px_-2px_rgba(38,60,96,0.20)]"} z-10`}>
        <table>
          <thead>
            <tr className="border-b border-dashed border-b-[#9A9AAF]">
              <th className="px-4 lg:px-8 py-4 bg-white font-bold text-xs uppercase min-w-[80px] lg:min-w-[120px] sticky left-0 z-10">
                {firstCol.header}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td className="px-4 lg:px-8 py-4 bg-white min-w-[80px] lg:min-w-[120px] sticky left-0 z-10">
                  {firstCol.renderCell
                    ? firstCol.renderCell(row[firstCol.accessor], row)
                    : String(row[firstCol.accessor] ?? "")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Scrollable rest of table */}
      <div className="overflow-x-auto max-w-screen bg-white rounded-br-lg">
        <table className="w-full text-xs text-left font-bold">
          <thead>
            <tr className="border-b border-dashed border-b-[#9A9AAF]">
              {restCols.map((col, idx) => (
                <th
                  key={col.header}
                  className={`px-4 lg:px-8 py-4 bg-white font-bold text-xs uppercase min-w-[80px] lg:min-w-[120px] ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {restCols.map((col) => (
                  <td
                    key={col.header}
                    className={`px-4 lg:px-8 py-4 whitespace-normal min-w-[80px] lg:min-w-[120px] ${col.className || ""}`}
                  >
                    {col.renderCell
                      ? col.renderCell(row[col.accessor], row)
                      : String(row[col.accessor] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
        <p className="text-sm text-gray-700 text-center sm:text-left">
          Showing {currentRows.length} of {data.length} records
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-[10px] rounded-[14px] bg-[rgba(0,_0,_0,_0.08)] text-black disabled:opacity-50"
          >
            <BiChevronLeft size={20} />
          </button>
          <span className="p-[10px] rounded-[14px] bg-[rgba(0,_0,_0,_0.08)] text-black text-xs">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-[10px] rounded-[14px] bg-[rgba(0,_0,_0,_0.08)] text-black disabled:opacity-50"
          >
            <BiChevronRight size={20} />
          </button>
        </div>
      </div>
      </>
  );
}