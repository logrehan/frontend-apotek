// src/pages/ObatPage.jsx

import { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import api from "../services/api";

export default function ObatPage() {
  const [obat, setObat] = useState([]);

  const getObat = async () => {
    try {
      const response = await api.get("/obat");
      setObat(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getObat();
  }, []);

  return (
    <div className="bg-white border border-slate-200">
      {/* HEADER */}
      <div
        className="
          flex items-center justify-between
          px-4 py-3
          border-b border-slate-200
          bg-slate-50
        "
      >
        <div>
          <h1 className="text-sm font-semibold text-slate-700">
            Data Obat
          </h1>

          <p className="text-[11px] text-slate-500 mt-0.5">
            Kelola data obat apotek
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white
            text-xs
            px-3 py-2
            rounded-md
          "
        >
          <FaPlus className="text-[10px]" />
          Tambah
        </button>
      </div>

      {/* TOOLBAR */}
      <div
        className="
          flex items-center justify-between
          px-4 py-2
          border-b border-slate-200
          bg-white
        "
      >
        {/* SEARCH */}
        <div
          className="
            flex items-center gap-2
            border border-slate-200
            rounded-md
            px-2 py-1.5
            w-[250px]
          "
        >
          <FaSearch className="text-[11px] text-slate-400" />

          <input
            type="text"
            placeholder="Cari obat..."
            className="
              outline-none
              text-xs
              w-full
            "
          />
        </div>

        {/* FILTER */}
        <select
          className="
            border border-slate-200
            rounded-md
            px-2 py-1.5
            text-xs
            outline-none
          "
        >
          <option>Semua Jenis</option>
        </select>
      </div>

      {/* TABLE */}
      <table className="w-full">
        <thead className="bg-slate-100 border-b border-slate-200">
          <tr>
            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2 w-[60px]">
              No
            </th>

            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2">
              Nama Obat
            </th>

            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2">
              Harga
            </th>

            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2">
              Stok
            </th>

            <th className="text-center text-[11px] font-semibold text-slate-600 px-3 py-2 w-[100px]">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {obat.length > 0 ? (
            obat.map((item, index) => (
              <tr
                key={item.id}
                className="
                  border-b border-slate-100
                  hover:bg-slate-50
                "
              >
                <td className="px-3 py-2 text-xs text-slate-600">
                  {index + 1}
                </td>

                <td className="px-3 py-2">
                  <div>
                    <h3 className="text-xs font-medium text-slate-700">
                      {item.nama_obat}
                    </h3>
                  </div>
                </td>

                <td className="px-3 py-2 text-xs text-slate-700">
                  Rp{" "}
                  {Number(item.harga_jual).toLocaleString("id-ID")}
                </td>

                <td className="px-3 py-2">
                  <span
                    className={`
                      text-[10px]
                      px-2 py-1
                      rounded
                      ${
                        item.stok <= 10
                          ? "bg-red-100 text-red-600"
                          : "bg-emerald-100 text-emerald-600"
                      }
                    `}
                  >
                    {item.stok}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <div className="flex items-center justify-center gap-1">
                    <button
                      className="
                        w-6 h-6
                        flex items-center justify-center
                        rounded
                        bg-amber-100
                        text-amber-600
                        hover:bg-amber-200
                      "
                    >
                      <FaEdit className="text-[10px]" />
                    </button>

                    <button
                      className="
                        w-6 h-6
                        flex items-center justify-center
                        rounded
                        bg-red-100
                        text-red-600
                        hover:bg-red-200
                      "
                    >
                      <FaTrash className="text-[10px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center py-6 text-xs text-slate-400"
              >
                Data obat masih kosong.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}