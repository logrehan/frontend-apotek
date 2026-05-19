import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        "/auth/login",
        form
      );

      // SIMPAN TOKEN
      localStorage.setItem(
        "token",
        response.data.data.token
      );

      // SIMPAN USER
      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.data.user
        )
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-100
        overflow-hidden
        px-4
      "
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-emerald-300
            rounded-full
            blur-3xl
            top-[-200px]
            left-[-200px]
          "
        />

        <div
          className="
            absolute
            w-[400px]
            h-[400px]
            bg-emerald-400
            rounded-full
            blur-3xl
            bottom-[-150px]
            right-[-150px]
          "
        />
      </div>

      {/* CARD */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-sm
          bg-white/90
          backdrop-blur-sm
          border
          border-slate-200
          rounded-2xl
          p-6
          shadow-lg
        "
      >
        {/* TITLE */}
        <div className="mb-6">
          <h1
            className="
              text-2xl
              font-bold
              text-slate-800
            "
          >
            Login
          </h1>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Sistem Informasi Apotek
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          {/* EMAIL */}
          <div>
            <label
              className="
                text-xs
                font-medium
                text-slate-600
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              className="
                w-full
                h-10
                mt-1
                px-3
                rounded-md
                border
                border-slate-200
                outline-none
                text-sm
                focus:ring-2
                focus:ring-emerald-400
              "
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              className="
                text-xs
                font-medium
                text-slate-600
              "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="
                w-full
                h-10
                mt-1
                px-3
                rounded-md
                border
                border-slate-200
                outline-none
                text-sm
                focus:ring-2
                focus:ring-emerald-400
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-10
              rounded-md
              bg-emerald-500
              hover:bg-emerald-600
              transition-all
              text-white
              text-sm
              font-medium
              disabled:opacity-70
            "
          >
            {loading
              ? "Loading..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}