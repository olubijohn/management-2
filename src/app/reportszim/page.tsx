"use client";
import Breadcrumb from "@/components/breadcrumb";
import { DocumentDownload } from "iconsax-reactjs";
import { PaginatedTable, Column } from "@/components/paginated-table";
import { reports, Report } from "@/data/reports";
import DatePicker from "@/components/DatePicker";

export default function Page() {
  const columns: Column<Report>[] = [
    {
      header: "CUSTOMER CODE",
      accessor: "customerCode",
      className: "min-w-[120px]",
    },
    {
      header: "CUSTOMER NAME",
      accessor: "customerName",
      className: "min-w-[140px]",
    },
    { header: "TPIN", accessor: "tpin", className: "min-w-[120px]" },
    {
      header: "PASTEL INVOICE NO.",
      accessor: "pastelInvoiceNo",
      className: "min-w-[140px]",
    },
    { header: "CREATED ON", accessor: "createdOn", className: "min-w-[120px]" },
    {
      header: "SMART INVOICE NO.",
      accessor: "smartInvoiceNo",
      className: "min-w-[180px]",
    },
    {
      header: "DESCRIPTION",
      accessor: "description",
      className: "min-w-[100px]",
    },
    { header: "EXCLUSIVE", accessor: "exclusive", className: "min-w-[100px]" },
    { header: "REGION", accessor: "region", className: "min-w-[100px]" },
    { header: "STATUS", accessor: "status", className: "min-w-[100px]" },
    { header: "AMOUNT", accessor: "amount", className: "min-w-[100px]" },
  ];

  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
    // Use this date to filter your table
  };

  return (
    <main className="w-full lg:w-[1120px]">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Reports", href: "/reports" },
        ]}
      />
      <div className="px-2 lg:px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h1 className="text-[28px] lg:text-[40px] font-bold">Reports</h1>
        <DatePicker onDateSelect={handleDateSelect} />
      </div>
      <div className="mt-5 min-h-screen">
        <div className="bg-[rgba(255,_255,_255,_0.70)] rounded-t-[10px] p-3 lg:p-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <div>
            <h1 className="text-lg font-semibold mb-1">Reports</h1>
            <p className="text-sm text-gray-500 mb-4">
              View all reports that you have created
            </p>
          </div>
          <button className="px-4 lg:px-5 py-[9px] bg-blue text-[#F0F4F9] rounded text-xs cursor-pointer font-semibold flex items-center gap-2 w-full lg:w-auto justify-center">
            <DocumentDownload size="18" color="white" />
            <span>DOWNLOAD</span>
          </button>
        </div>
        <div className="max-w-full overflow-x-auto">
          <PaginatedTable<Report>
            columns={columns}
            data={reports}
            rowsPerPage={10}
            shadow={true}
          />
        </div>
      </div>
    </main>
  );
}
