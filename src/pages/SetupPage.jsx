import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCapsules,
  FaShieldAlt,
  FaChartBar,
  FaUserShield,
} from "react-icons/fa";

import api from "../services/api";

export default function SetupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/users/setup-admin", form);

      alert("APOTEK POINT system activated");

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 p-6 overflow-hidden">

      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-emerald-300 rounded-full blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-emerald-400 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
      </div>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-6xl bg-white/90 backdrop-blur border border-slate-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl">

        {/* LEFT */}
        <div className="bg-gradient-to-b from-emerald-600 to-emerald-700 text-white p-10 flex flex-col justify-between">

          <div>
            <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <FaCapsules className="text-xl" />
            </div>

            <h1 className="text-3xl font-semibold tracking-wide">
              APOTEK POINT
            </h1>

            <p className="text-sm text-emerald-50 mt-3 leading-relaxed">
                Professional Pharmacy Management System for integrated management of medicines, transactions, stock, and pharmacy operations.
            </p>
          </div>

          <div className="space-y-4 mt-10">

            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-lg mt-1" />
              <div>
                <p className="text-sm font-medium">Secure System</p>
                <p className="text-xs text-emerald-100">
                  Role-based access control
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaChartBar className="text-lg mt-1" />
              <div>
                <p className="text-sm font-medium">Realtime Monitoring</p>
                <p className="text-xs text-emerald-100">
                  Stock & sales analytics
                </p>
              </div>
            </div>

          </div>

          {/* CREDIT */}
          <div className="mt-10 pt-5 border-t border-white/20 text-xs text-emerald-100">
            © {new Date().getFullYear()} Apotek Point system • v1.0.0
          </div>

        </div>

        {/* RIGHT */}
        <div className="p-10 flex items-center justify-center">

          <div className="w-full max-w-md">

            <div className="mb-8">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest">
                <FaUserShield />
                SYSTEM INITIALIZATION
              </div>

              <h2 className="text-2xl font-semibold text-slate-800 mt-2">
                Create System Administrator
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                First-time setup required to activate Apotek Point system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Administrator Name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-11 border border-slate-200 px-3 text-sm focus:border-emerald-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-11 border border-slate-200 px-3 text-sm focus:border-emerald-500 outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="Secure Password"
                value={form.password}
                onChange={handleChange}
                className="w-full h-11 border border-slate-200 px-3 text-sm focus:border-emerald-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium shadow-sm"
              >
                {loading ? "Initializing System..." : "Activate System"}
              </button>

            </form>

            {/* SMALL NOTE */}
            <p className="text-[11px] text-slate-400 mt-6 text-center">
              Secure medical inventory system for pharmacy operations
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}