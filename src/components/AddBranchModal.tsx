import { useState, useEffect } from "react";
import Image from "next/image";

const fields = [
  { label: "Branch TPIN", name: "branchTpin" },
  { label: "Branch ID", name: "branchId" },
  { label: "Device Model Version", name: "deviceModel" },
  { label: "Device ID", name: "deviceId" },
  { label: "Activation Key", name: "activationKey" },
];

export type BranchForm = {
  branchTpin: string;
  branchId: string;
  branchSerial: string;
  deviceModel: string;
  deviceId: string;
  activationKey: string;
};

export default function AddBranchModal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (form: BranchForm) => void;
}) {
  const [form, setForm] = useState<BranchForm>({
    branchTpin: "",
    branchId: "",
    branchSerial: "BR-SN-2023-001", // Static value for the serial number
    deviceModel: "",
    deviceId: "",
    activationKey: "",
  });
  const [focus, setFocus] = useState<{ [key: string]: boolean }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Check if all required fields are filled
  useEffect(() => {
    const isValid = Object.values(form).every((value) => value.trim() !== "");
    setIsFormValid(isValid);
  }, [form]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.15)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] shadow-lg w-[370px] h-[390px] relative flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center mb-4 pt-[20px] px-[20px]">
          <Image
            src="/code.png"
            alt="Code"
            width={32}
            height={32}
            className="mr-4"
          />
          <div className="space-y-2">
            <h2 className="text-[15px] font-bold leading-tight">
              Create a New Branch
            </h2>
            <p className="text-xs text-gray-500 leading-tight">
              Provide the basic information for your branch
            </p>
          </div>
        </div>
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-2 px-[20px]">
          <Image
            src="/information.png"
            alt="Information"
            width={18}
            height={18}
          />
          <span className="text-xs">Basic Branch Information</span>
        </div>
        {/* Form Container */}
        <div className=" relative flex-1 overflow-hidden">
          <form className="  h-full overflow-y-auto pb-0 hide-scrollbar px-[22px]">
            {fields.map((field, index) => (
              <div
                key={field.name}
                className="relative mb-3"
                style={index >= 4 ? { opacity: 0.6 } : {}}
              >
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [field.name]: e.target.value })
                  }
                  onFocus={() => setFocus({ ...focus, [field.name]: true })}
                  onBlur={() => setFocus({ ...focus, [field.name]: false })}
                  className={`block w-full px-4 pt-0 pb-3 bg-[#F5F7FA] rounded-[8px] transition-all
                    ${focus[field.name] ? "outline outline-blue-500" : ""}
                    text-[14px] ${
                      field.name === "deviceModel" ? "text-gray-500" : ""
                    }`}
                  autoComplete="off"
                  style={{ height: "40px" }}
                  // Disable the third field (Branch Serial Number)
                />
                <label
                  htmlFor={field.name}
                  className={`absolute left-4 -top-2 text-gray-400 pointer-events-none transition-all duration-200
                    ${
                      focus[field.name] || form[field.name as keyof typeof form]
                        ? "text-xs -top-2 px-1 !text-blue-500"
                        : "text-[14px] top-3"
                    }
                    ${field.name === "branchSerial" ? "!text-gray-500" : ""}
                  `}
                  style={{
                    background:
                      focus[field.name] || form[field.name as keyof typeof form]
                        ? "#fff"
                        : "transparent",
                  }}
                >
                  {field.label}
                </label>
              </div>
            ))}
          </form>
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
            className={`flex-1 px-5 py-[18px] rounded-br-[8px] font-semibold ${
              isFormValid
                ? "bg-[#0062FF] text-white"
                : "bg-[#F5F7FA] text-gray-400"
            }`}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            CREATE BRANCH
          </button>
        </div>
      </div>
    </div>
  );
}
