// src/pages/Dashboard.jsx

import {
  FaCapsules,
  FaLayerGroup,
  FaExclamationTriangle,
  FaCashRegister,
} from "react-icons/fa";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Obat",
      value: 120,
      icon: <FaCapsules />,
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
    {
      title: "Jenis Obat",
      value: 12,
      icon: <FaLayerGroup />,
    },
  ];

  const stokKritis = [
    {
      nama: "Paracetamol",
      stok: 4,
    },
    {
      nama: "Amoxicillin",
      stok: 2,
    },
    {
      nama: "OBH Combi",
      stok: 6,
    },
    {
      nama: "Vitamin C",
      stok: 8,
    },
  ];

  const transaksi = [
    {
      kode: "TRX-001",
      kasir: "Raihan",
      total: "Rp 120.000",
    },
    {
      kode: "TRX-002",
      kasir: "Aulia",
      total: "Rp 80.000",
    },
    {
      kode: "TRX-003",
      kasir: "Fajar",
      total: "Rp 210.000",
    },
  ];

  return (
    <div className="space-y-3">
      {/* STATS */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              border border-slate-200
              p-4
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-2xl font-semibold text-slate-800 mt-1">
                  {item.value}
                </h2>
              </div>

              <div
                className="
                  w-8 h-8
                  bg-slate-100
                  border border-slate-200
                  flex items-center justify-center
                  text-slate-600
                  text-xs
                "
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-3">
          {/* STOK KRITIS */}
          <div className="bg-white border border-slate-200">
            {/* HEADER */}
            <div
              className="
                px-4 py-3
                border-b border-slate-200
                flex items-center justify-between
              "
            >
              <h2 className="text-sm font-semibold text-slate-700">
                Stok Kritis
              </h2>

              <span className="text-[11px] text-red-500">
                Perlu Restock
              </span>
            </div>

            {/* TABLE */}
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500">
                    Nama Obat
                  </th>

                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500 w-[120px]">
                    Stok
                  </th>

                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500 w-[140px]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {stokKritis.map((item, index) => (
                  <tr
                    key={index}
                    className="
                      border-b border-slate-100
                      hover:bg-slate-50
                    "
                  >
                    <td className="px-4 py-3 text-[12px] text-slate-700">
                      {item.nama}
                    </td>

                    <td className="px-4 py-3 text-[12px] font-medium text-slate-700">
                      {item.stok}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className="
                          px-2 py-1
                          text-[10px]
                          bg-red-50
                          text-red-600
                        "
                      >
                        Menipis
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TRANSAKSI */}
          <div className="bg-white border border-slate-200">
            {/* HEADER */}
            <div
              className="
                px-4 py-3
                border-b border-slate-200
              "
            >
              <h2 className="text-sm font-semibold text-slate-700">
                Transaksi Terbaru
              </h2>
            </div>

            {/* TABLE */}
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500">
                    Kode
                  </th>

                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500">
                    Kasir
                  </th>

                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-slate-500">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {transaksi.map((item, index) => (
                  <tr
                    key={index}
                    className="
                      border-b border-slate-100
                      hover:bg-slate-50
                    "
                  >
                    <td className="px-4 py-3 text-[12px] text-slate-700">
                      {item.kode}
                    </td>

                    <td className="px-4 py-3 text-[12px] text-slate-700">
                      {item.kasir}
                    </td>

                    <td className="px-4 py-3 text-[12px] font-medium text-slate-700">
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-3">
          {/* PENJUALAN */}
          <div className="bg-white border border-slate-200">
            <div className="px-4 py-3 border-b border-slate-200">
              <h2 className="text-sm font-semibold text-slate-700">
                Penjualan Hari Ini
              </h2>
            </div>

            <div className="p-4">
              <h1 className="text-3xl font-semibold text-slate-800">
                Rp 2.4jt
              </h1>

              <p className="text-[11px] text-emerald-600 mt-2">
                +12% dari kemarin
              </p>
            </div>
          </div>

          {/* USER */}
          <div className="bg-white border border-slate-200">
            <div className="px-4 py-3 border-b border-slate-200">
              <h2 className="text-sm font-semibold text-slate-700">
                Aktivitas User
              </h2>
            </div>

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
                  Kasir Online
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-1">
                  2
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

          {/* OBAT LARIS */}
          <div className="bg-white border border-slate-200">
            <div className="px-4 py-3 border-b border-slate-200">
              <h2 className="text-sm font-semibold text-slate-700">
                Obat Terlaris
              </h2>
            </div>

            <div>
              {[
                "Paracetamol",
                "Vitamin C",
                "Amoxicillin",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    px-4 py-3
                    border-b border-slate-100
                    text-[12px]
                    text-slate-700
                    flex items-center justify-between
                  "
                >
                  <span>{item}</span>

                  <span className="text-slate-400">
                    #{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}