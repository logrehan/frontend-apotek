// src/components/Sidebar.jsx

import {
  FaHome,
  FaPills,
  FaLayerGroup,
  FaCashRegister,
  FaChartBar,
  FaUsers,
  FaTruck,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      section: "MAIN",
      items: [
        {
          name: "Dashboard",
          path: "/",
          icon: <FaHome />,
        },
        {
          name: "Data Obat",
          path: "/obat",
          icon: <FaPills />,
        },
        {
          name: "Jenis Obat",
          path: "/jenis-obat",
          icon: <FaLayerGroup />,
        },
      ],
    },

    {
      section: "MANAGEMENT",
      items: [
        {
          name: "Distributor",
          path: "/distributor",
          icon: <FaTruck />,
        },
        {
          name: "Users",
          path: "/users",
          icon: <FaUsers />,
        },
      ],
    },

    {
      section: "TRANSACTION",
      items: [
        {
          name: "Kasir",
          path: "/kasir",
          icon: <FaCashRegister />,
        },
        {
          name: "Laporan",
          path: "/laporan",
          icon: <FaChartBar />,
        },
      ],
    },
  ];

  return (
    <aside
      className="
        fixed left-0 top-0
        w-[180px] h-screen
        bg-[#0f5cc0]
        text-white
        flex flex-col
      "
    >
      {/* LOGO */}
      <div className="px-4 py-3 border-b border-blue-400">
        <h1 className="text-sm font-semibold">
          Apotek Point
        </h1>
      </div>

      {/* MENU */}
      <div className="flex flex-col py-2">
        {menus.map((group) => (
          <div key={group.section} className="mb-3">
            {/* SECTION */}
            <p
              className="
                px-4 mb-1
                text-[9px]
                tracking-widest
                text-blue-200
              "
            >
              {group.section}
            </p>

            {/* ITEMS */}
            {group.items.map((menu) => {
              const active =
                location.pathname === menu.path;

              return (
                <Link
                  key={menu.path}
                  to={menu.path}
                  className={`
                    flex items-center gap-3
                    px-4 py-2.5
                    text-[12px]
                    transition-all duration-200
                    border-l-4
                    ${
                      active
                        ? `
                          bg-blue-700
                          border-white
                        `
                        : `
                          border-transparent
                          hover:bg-blue-700
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
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-auto px-4 py-3 border-t border-blue-400">
        <p className="text-[10px] text-blue-200">
          Apotek System v1.0
        </p>
      </div>
    </aside>
  );
}