import Image from "next/image";

export function BranchClosedAlert() {
  return (
    <div className="flex items-start bg-[#F6FAFF] rounded-[12px] px-6 py-3 mb-4">
      <Image src="/info2.png" alt="info" width={16} height={16} className="mr-2" />
      <div>
        <span className="text-[#0062FF] font-semibold">This branch is closed for the day.</span>
        <span className="block text-sm text-[#222]">
          All branch activities are paused until tomorrow at 12:00 AM or when reopened manually.
        </span>
      </div>
    </div>
  );
}

export function BranchDisabledAlert() {
  return (
    <div className="flex items-start bg-[#FFF9F3] rounded-[12px] px-6 py-3 mb-4">
      <Image src="/info3.png" alt="info" width={16} height={16} className="mr-2" />
      <div>
        <span className="text-[#F76B07] font-semibold">This Branch is disabled.</span>
        <span className="block text-sm text-[#222]">
          This branch is currently disabled. All device operations, invoicing, and branch activities are suspended until reactivated.
        </span>
      </div>
    </div>
  );
}