import Modal from "./Modal";

export default function BranchSuccessModal({
  open,
  onClose,
  onViewBranch,
}: {
  open: boolean;
  onClose: () => void;
  onViewBranch: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} width="w-full max-w-[470px]" height="h-auto max-h-[90vh] lg:h-[333px]">
      <div className="flex-1 flex flex-col items-center justify-center p-[32px] pb-0">
        <div className="border-dashed border-[2px] border-[#E5E7EB] rounded-[12px] w-full mb-8 p-6 flex flex-col items-center">
          <h2 className="text-lg font-bold text-[#222] mb-2 text-center">NEW BRANCH CREATED</h2>
          <div className="text-[28px] font-extrabold text-[#0062FF] text-center leading-tight">
            ACTION<br />SUCCESSFUL
          </div>
        </div>
      </div>
        {/* Buttons */}
        <div className="flex gap-[10px] mt-auto">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-5 py-[18px] rounded-bl-[8px] text-[#0062FF] font-semibold"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="flex-1 px-5 py-[18px] rounded-br-[8px] bg-[#0062FF] text-white font-semibold"
            onClick={onViewBranch}
          >
            VIEW BRANCH
          </button>
        </div>
    </Modal>
  );
}