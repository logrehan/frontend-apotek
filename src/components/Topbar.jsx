// src/components/Topbar.jsx

import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/obat": "Data Obat",
    "/jenis-obat": "Jenis Obat",
    "/kasir": "Kasir",
    "/laporan": "Laporan",
    "/pegawai": "Pegawai",
    "/settings": "Pengaturan",
  };

  return (
    <header
      className="
        h-[55px]
        bg-white
        border-b border-slate-200
        flex items-center justify-between
        px-4
      "
    >
      {/* LEFT */}
      <div>
        <h1 className="text-sm font-semibold text-slate-800">
          {titles[location.pathname] || "Dashboard"}
        </h1>

        <p className="text-[11px] text-slate-400 mt-0.5">
          Sistem manajemen apotek
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* SEARCH */}
        <div
          className="
            flex items-center gap-2
            border border-slate-200
            bg-slate-50
            px-3 py-2
            rounded-md
            w-[220px]
          "
        >
          <FaSearch className="text-[11px] text-slate-400" />

          <input
            type="text"
            placeholder="Cari..."
            className="
              bg-transparent
              outline-none
              text-xs
              w-full
            "
          />
        </div>

        {/* NOTIF */}
        <button
          className="
            w-9 h-9
            border border-slate-200
            rounded-md
            flex items-center justify-center
            text-slate-500
            hover:bg-slate-100
            transition-all
          "
        >
          <FaBell className="text-[12px]" />
        </button>

        {/* PROFILE */}
        <div
          className="
            flex items-center gap-2
            border border-slate-200
            rounded-md
            px-2 py-1.5
            bg-white
          "
        >
          <div
            className="
              w-7 h-7
              rounded-full
              bg-emerald-500
              flex items-center justify-center
              text-white
              text-[11px]
              font-semibold
            "
          >
            A
          </div>

          <div>
            <h3 className="text-[11px] font-medium text-slate-700">
              Admin
            </h3>

            <p className="text-[9px] text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}