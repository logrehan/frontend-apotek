// src/components/Topbar.jsx

import {
  FaCalendarAlt,
  FaCapsules,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div
      className="
        h-[48px]
        bg-white
        border-b border-slate-200
        flex items-center justify-between
        px-4
      "
    >
      {/* LEFT */}
      <div className="flex flex-col">
        <h2 className="text-sm font-bold text-slate-700">
          Dashboard Admin
        </h2>

        <p className="text-[10px] text-slate-400">
          Sistem Manajemen Apotek
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* ADMIN */}
        <div className="flex items-center gap-2">
          <div
            className="
              w-8 h-8
              rounded-full
              bg-blue-500
              text-white
              flex items-center justify-center
              text-xs font-semibold
            "
          >
            A
          </div>

          <div className="leading-[13px]">
            <p className="text-[11px] font-medium text-slate-700">
              Admin
            </p>

            <p className="text-[10px] text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}