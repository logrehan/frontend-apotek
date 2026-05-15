// src/pages/JenisObat.jsx

import { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import api from "../services/api";

export default function JenisObat() {
  const [jenisObat, setJenisObat] = useState([]);

  const getJenisObat = async () => {
    try {
      const response = await api.get("/jenis-obat");

      setJenisObat(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJenisObat();
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
            Jenis Obat
          </h1>

          <p className="text-[11px] text-slate-500 mt-0.5">
            Kelola kategori dan jenis obat
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
            placeholder="Cari jenis obat..."
            className="
              outline-none
              text-xs
              w-full
            "
          />
        </div>

        {/* TOTAL */}
        <div>
          <p className="text-[11px] text-slate-500">
            Total : {jenisObat.length} Jenis
          </p>
        </div>
      </div>

      {/* TABLE */}
      <table className="w-full">
        <thead className="bg-slate-100 border-b border-slate-200">
          <tr>
            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2 w-[60px]">
              No
            </th>

            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2">
              Nama Jenis
            </th>

            <th className="text-left text-[11px] font-semibold text-slate-600 px-3 py-2">
              Deskripsi
            </th>

            <th className="text-center text-[11px] font-semibold text-slate-600 px-3 py-2 w-[100px]">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {jenisObat.length > 0 ? (
            jenisObat.map((item, index) => (
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
                      {item.jenis}
                    </h3>
                  </div>
                </td>

                <td className="px-3 py-2 text-xs text-slate-600">
                  {item.deskripsi}
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
                colSpan="4"
                className="text-center py-6 text-xs text-slate-400"
              >
                Data jenis obat masih kosong.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}