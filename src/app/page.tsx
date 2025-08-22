"use client";
import Breadcrumb from "@/components/breadcrumb";
import { branches } from "@/data/branches";
import { IoIosArrowForward } from "react-icons/io";
import { PaginatedTable } from "@/components/paginated-table";
import { useState } from "react";
import AddBranchFeature from "@/features/branch/AddBranch";
import { useRouter } from "next/navigation";
import type { Column } from "@/components/paginated-table"; // Import the type
import { Add } from "iconsax-reactjs";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleViewBranch = (branchId: string) => {
    router.push(`/branch/${branchId}`);
  };

  type BranchRow = {
    branchId: string;
    provinceName: string;
    managerName: string;
    sdcId: string;
    deviceId: string;
    createdOn: string;
  };

  const columns: Column<BranchRow>[] = [
    { header: "BRANCH ID", accessor: "branchId" },
    { header: "PROVINCE NAME", accessor: "provinceName" },
    { header: "MANAGER NAME", accessor: "managerName", className: "w-[200px]" },
    { header: "SDC ID", accessor: "sdcId" },
    { header: "DEVICE ID", accessor: "deviceId" },
    {
      header: "CREATED ON",
      accessor: "createdOn",
      className: " w-[130px]",
    },
    {
      header: "",
      accessor: "branchId",
      renderCell: (_: string, row: BranchRow) => (
        <span
          className="text-blue flex items-center justify-center gap-1 cursor-pointer font-bold"
          onClick={() => handleViewBranch(row.branchId)}
        >
          View <IoIosArrowForward size={16} />
        </span>
      ),
      className: "px-4 py-4",
    },
  ];

  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Api Key Manager", href: "/dashboard" },
        ]}
      />
      <div className="px-4 flex items-center justify-between">
        <h1 className="text-[40px] font-bold">Branch Manager</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-[4px] mt-2 px-5 py-[9px] bg-transparent text-[#0062FF] rounded cursor-pointer font-semibold text-[11px] border border-[#0062FF] hover:shadow-[0_4px_35px_0_rgba(0,98,255,0.10)] hover:px-4 group"
        >
          <Add
            size="16"
            color="#0062FF"
            className="group-hover:rotate-45 transition-transform"
          />{" "}
          ADD NEW BRANCH
        </button>
      </div>
      <div className="min-h-screen mt-5">
        <div className="bg-[rgba(255,_255,_255,_0.70)] rounded-t-[10px] p-5">
          <h1 className="text-lg font-semibold mb-1">Branches</h1>
          <p className="text-sm text-gray-500 mb-4">
            View all branches that you have created
          </p>
        </div>
        <PaginatedTable<BranchRow>
          columns={columns}
          data={branches}
          rowsPerPage={10}
        />
      </div>
      <AddBranchFeature open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
