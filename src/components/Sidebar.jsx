// src/components/Sidebar.jsx

import {
  FaHome,
  FaPills,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { logout } from "../utils/auth";

export default function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Data Obat",
      path: "/obat",
      icon: <FaPills />,
    },
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        w-[180px]
        h-screen
        bg-emerald-600
        text-white
        flex
        flex-col
      "
    >
      {/* LOGO */}
      <div
        className="
          px-4
          py-4
          border-b
          border-emerald-400
        "
      >
        <h1 className="text-sm font-semibold">
          Apotek Point
        </h1>
      </div>

      {/* MENU */}
      <div className="flex flex-col py-2">
        {menus.map((menu) => {
          const active =
            location.pathname ===
            menu.path;

          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-2.5
                text-[12px]
                transition-all
                duration-200
                border-l-4
                ${
                  active
                    ? `
                      bg-emerald-700
                      border-white
                    `
                    : `
                      border-transparent
                      hover:bg-emerald-700
                      hover:translate-x-1
                    `
                }
              `}
            >
              <span className="text-xs">
                {menu.icon}
              </span>

              <span>{menu.name}</span>
            </Link>
          );
        })}
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-auto
          border-t
          border-emerald-400
        "
      >
        {/* LOGOUT */}
        <button
          onClick={logout}
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            text-[12px]
            hover:bg-emerald-700
            transition-all
          "
        >
          <FaSignOutAlt />

          <span>Logout</span>
        </button>

        {/* VERSION */}
        <div className="px-4 pb-3">
          <p className="text-[10px] text-emerald-200">
            Apotek System v1.0
          </p>
        </div>
      </div>
    </aside>
  );
}