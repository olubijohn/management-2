"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  BranchClosedAlert,
  BranchDisabledAlert,
} from "@/components/BranchAlert";
import {
  CloseBranchModal,
  DeactivateBranchModal,
} from "@/components/BranchConfirmModal";
import BackButton from "@/components/BackButton";
import Breadcrumb from "@/components/breadcrumb";

// Dummy data for demonstration
const branch = {
  name: "Harare HQ",
  tpin: "390291",
  branchId: "001",
  managerName: "FISCAL EDGE SOLUTIONS LIMITED",
  managerEmail: "fiscaledgesoultions@limited.com",

  deviceSerial: "SDC0600000006",
  deviceId: "901FFXYZ",
  dateCreated: "2025-08-07",
  SDCID: "SDC0060000006",
};

const activityLogs = [
  {
    dateTime: "14/03/2024 10:30:45 AM",
    activity: "Closed for the day",
    performedBy: "Tendai Ncube",
  },
  {
    dateTime: "14/03/2024 10:30:45 AM",
    activity: "Closed for the day",
    performedBy: "System",
  },
  {
    dateTime: "14/03/2024 10:30:45 AM",
    activity: "Closed for the day",
    performedBy: "System",
  },
];

export default function BranchDetailPage() {
  const { id } = useParams();
  const [disabled, setDisabled] = useState(false);
  const [closed, setClosed] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/dashboard" },
          { label: "Harare HQ", href: "/branch/001" },
        ]}
      />
      <BackButton />
      {/* Alerts */}
      {disabled && <BranchDisabledAlert />}
      {closed && <BranchClosedAlert />}
      <main className="bg-[rgba(255,_255,_255,_0.60)] rounded-[16px] p-5 min-h-[500px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 p-5 rounded-[10px] bg-white">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-[56px] h-[56px] rounded-full bg-[#F5F7FA] flex items-center justify-center text-[28px] font-bold text-[#0062FF]">
              H
            </div>
            <div>
              <h1 className="text-[20px] font-bold leading-tight">
                {branch.name}
              </h1>
              <div className="flex items-center gap-3 mt-1 text-xs text-black">
                <span className="font-semibold">TPIN</span> {branch.tpin}
                <span className="text-[#9A9AAF]">•</span>
                <span className="font-semibold">Branch ID</span>{" "}
                {branch.branchId}
                <span className="text-[#9A9AAF]">•</span>
                <span className="font-semibold">SDCID</span> {branch.SDCID}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={`px-6 py-2 bg-[#0062FF] text-white rounded-[8px] font-semibold ${
                closed ? "opacity-50 !cursor-not-allowed" : ""
              }`}
              disabled={closed}
              onClick={() => setShowCloseModal(true)}
            >
              Close for the Day
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#222] font-semibold">
                {disabled ? "Enable" : "Disable"} Branch
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={() => {
                    if (!disabled) {
                      setShowDeactivateModal(true);
                    } else {
                      setDisabled(false);
                    }
                  }}
                  className="sr-only"
                />
                <span
                  className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    disabled ? "bg-[#0062FF]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      disabled ? "translate-x-4" : ""
                    }`}
                  />
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Info & Logs */}
        <div className="flex gap-5">
          {/* Branch Info */}
          <div className="flex-1 p-5 rounded-[10px] bg-white">
            <h2 className="text-[15px] font-bold mb-4">Branch Information</h2>
            <div className="space-y-3 text-sm">
              <div className="text-xs">
                <span className="">Branch Name</span>
                <span className="font-semibold ml-2">{branch.name}</span>
              </div>
              <div className="text-xs">
                <span className="">Branch ID</span>
                <span className="font-semibold ml-2">{branch.branchId}</span>
              </div>
              <div className="text-xs">
                <span className="">Manager Name</span>
                <span className=" font-semibold ml-2 font-bold">
                  {branch.managerName}
                </span>
              </div>
              <div className="text-xs">
                <span className="">Manager Email</span>
                <span className="font-semibold ml-2">
                  {branch.managerEmail}
                </span>
              </div>
              <div className="text-xs">
                <span className="">Device ID</span>
                <span className=" font-semibold ml-2">{branch.deviceId}</span>
              </div>
              <div className="text-xs">
                <span className="">Date Created</span>
                <span className=" font-semibold ml-2">
                  {branch.dateCreated}
                </span>
              </div>
            </div>
          </div>
          {/* Activity Logs */}
          <div className="flex-1 p-5 rounded-[10px] bg-white">
            <h2 className="text-[16px] font-bold mb-4">Branch Activity Logs</h2>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-dashed border-gray-200">
                  <th className="py-2 text-left font-semibold text-xs text-gray-600">
                    DATE & TIME
                  </th>
                  <th className="py-2 text-left font-semibold text-xs text-gray-600">
                    ACTIVITY
                  </th>
                  <th className="py-2 text-left font-semibold text-xs text-gray-600">
                    PERFORMED BY
                  </th>
                </tr>
              </thead>
              <tbody>
                {activityLogs.map((log, idx) => (
                  <tr key={idx}>
                    <td className="py-2 w-[100px]">{log.dateTime}</td>
                    <td className="py-2">{log.activity}</td>
                    <td className="py-2">{log.performedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      {/* Modals */}
      <CloseBranchModal
        open={showCloseModal}
        onClose={() => setShowCloseModal(false)}
        onConfirm={() => {
          setClosed(true);
          setShowCloseModal(false);
        }}
      />
      <DeactivateBranchModal
        open={showDeactivateModal}
        onClose={() => setShowDeactivateModal(false)}
        onConfirm={() => {
          setDisabled(true);
          setShowDeactivateModal(false);
        }}
      />
    </>
  );
}
