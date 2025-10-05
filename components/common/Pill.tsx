// components/common/Pill.tsx
import React from "react";

type PillProps = {
  label: string;
  onClick?: (label: string) => void;
  active?: boolean;
};

const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={() => onClick?.(label)}
      className={`px-3 py-1 rounded-full text-sm border ${
        active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"
      } hover:shadow-sm`}
    >
      {label}
    </button>
  );
};

export default Pill;
