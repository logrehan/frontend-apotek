// src/pages/Dashboard.jsx

import {
  FaCapsules,
  FaLayerGroup,
  FaExclamationTriangle,
  FaCashRegister,
} from "react-icons/fa";

export default function Dashboard() {
  const cards = [
    {
      title: "Total Obat",
      value: 120,
      icon: <FaCapsules />,
    },
    {
      title: "Jenis Obat",
      value: 12,
      icon: <FaLayerGroup />,
    },
    {
      title: "Stok Menipis",
      value: 8,
      icon: <FaExclamationTriangle />,
    },
    {
      title: "Transaksi Hari Ini",
      value: 24,
      icon: <FaCashRegister />,
    },
  ];

  return (
    <div className="space-y-3">
      {/* HEADER */}
      <div
        className="
          bg-white
          border border-slate-200
          px-4 py-3
        "
      >
        <h1 className="text-base font-semibold text-slate-800">
          Dashboard
        </h1>

        <p className="text-xs text-slate-500 mt-1">
          Selamat datang di sistem manajemen apotek.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white
              border border-slate-200
              px-4 py-3
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-500">
                  {card.title}
                </p>

                <h2 className="text-2xl font-semibold text-slate-800 mt-1">
                  {card.value}
                </h2>
              </div>

              <div
                className="
                  w-9 h-9
                  bg-slate-100
                  border border-slate-200
                  flex items-center justify-center
                  text-slate-600
                  text-sm
                "
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        {/* AKTIVITAS */}
        <div
          className="
            xl:col-span-2
            bg-white
            border border-slate-200
          "
        >
          {/* HEADER */}
          <div className="px-4 py-3 border-b border-slate-200">
            <h2 className="text-sm font-semibold text-slate-700">
              Aktivitas Terbaru
            </h2>
          </div>

          {/* BODY */}
          <div>
            {[
              {
                title: "Paracetamol berhasil ditambahkan",
                time: "2 menit lalu",
              },
              {
                title: "Transaksi baru berhasil dibuat",
                time: "10 menit lalu",
              },
              {
                title: "Stok Amoxicillin mulai menipis",
                time: "1 jam lalu",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  px-4 py-3
                  border-b border-slate-100
                  hover:bg-slate-50
                "
              >
                <p className="text-sm text-slate-700">
                  {item.title}
                </p>

                <span className="text-[11px] text-slate-400">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK INFO */}
        <div
          className="
            bg-white
            border border-slate-200
          "
        >
          {/* HEADER */}
          <div className="px-4 py-3 border-b border-slate-200">
            <h2 className="text-sm font-semibold text-slate-700">
              Informasi Sistem
            </h2>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4">
            <div>
              <p className="text-[11px] text-slate-500">
                User Aktif
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-1">
                5
              </h3>
            </div>

            <div>
              <p className="text-[11px] text-slate-500">
                Total Penjualan
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-1">
                Rp 12.5jt
              </h3>
            </div>

            <div>
              <p className="text-[11px] text-slate-500">
                Status Server
              </p>

              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-emerald-500"></div>

                <span className="text-sm text-slate-700">
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}