"use client"
import { useState } from "react";
import AddBranchModal from "@/components/AddBranchModal";
import BranchSuccessModal from "@/components/BranchSuccessModal";
import { useRouter } from "next/navigation";
import type { BranchForm } from "@/components/AddBranchModal";

export default function AddBranchFeature({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [successOpen, setSuccessOpen] = useState(false);
  const [newBranchId, setNewBranchId] = useState<string | null>(null);
  const router = useRouter();

  // Simulate form submission
  const handleCreateBranch = (form: BranchForm) => {
    // Simulate API call and branch creation
    const generatedId = form.branchId || "001"; // Use entered Branch ID or fallback
    setNewBranchId(generatedId);
    setSuccessOpen(true);
    onClose(); // Close the add branch modal
  };

  const handleViewBranch = () => {
    if (newBranchId) {
      router.push(`/branch/${newBranchId}`);
      setSuccessOpen(false);
    }
  };

  return (
    <>
      <AddBranchModal
        open={open}
        onClose={onClose}
        onCreate={handleCreateBranch}
      />
      <BranchSuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        onViewBranch={handleViewBranch}
      />
    </>
  );
}