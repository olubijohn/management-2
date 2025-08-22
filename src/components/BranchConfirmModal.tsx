import Modal from "./Modal";
import Image from "next/image";

export function CloseBranchModal({ open, onClose, onConfirm }: { open: boolean; onClose: () => void; onConfirm: () => void }) {
  return (
    <Modal open={open} onClose={onClose} width="390px" height="347px">
      <div className="flex flex-col items-center justify-center pb-4">
        <div className="flex flex-col items-center justify-center px-5 pt-[30px]">
          <Image src="/info.png" alt="info" width={64} height={64} className="mb-4" />
          <h2 className="text-xl font-bold text-[#222] mb-2 text-center">Close for the Day?</h2>
          <p className="text-sm text-[#222] text-center mb-2">
            This action will stop new transactions until the next business day. Notify staff that the branch is closed. Maintain device connectivity but in “closed” status.
          </p>
          <p className="text-sm text-[#222] text-center mb-6">
            You can reopen the branch manually before the next day if needed.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-[10px] mt-auto text-sm">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-5 py-[18px] rounded-bl-[8px] text-[#0062FF] font-semibold"
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="flex-1 px-3 rounded-br-[8px] bg-[#0062FF] text-white font-semibold"
          onClick={onConfirm}
        >
          CLOSE FOR THE DAY
        </button>
      </div>
    </Modal>
  );
}

export function DeactivateBranchModal({ open, onClose, onConfirm }: { open: boolean; onClose: () => void; onConfirm: () => void }) {
  return (
    <Modal open={open} onClose={onClose} width="390px" height="373px">
      <div className="flex flex-col items-center justify-center pb-4">
        <div className="flex flex-col items-center justify-center px-5 pt-[30px]">
          <Image src="/info.png" alt="info" width={64} height={64} className="mb-4" />
          <h2 className="text-xl font-bold text-[#222] mb-2 text-center">Deactivate Branch?</h2>
          <p className="text-sm text-[#222] text-center mb-2">
            When you deactivate this branch, it will no longer process transactions. All connected devices will be disabled until reactivated. Managers and staff will lose access.
          </p>
          <p className="text-sm text-[#222] text-center mb-6">
            You can reactivate the branch anytime from this page.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-[10px] mt-auto text-sm">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-5 py-[18px] rounded-bl-[8px] text-[#0062FF] font-semibold"
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="flex-1 px-3 rounded-br-[8px] bg-[#D32F2F] text-white font-semibold"
          onClick={onConfirm}
        >
          DEACTIVATE BRANCH
        </button>
      </div>
    </Modal>
  );
}