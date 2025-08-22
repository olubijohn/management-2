import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  width = "400px",
  height = "auto",
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div
        className="bg-white rounded-[16px] shadow-lg relative flex flex-col"
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  );
}