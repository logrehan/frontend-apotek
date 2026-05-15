// src/layouts/MainLayout.jsx

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      <Sidebar />

      <main className="ml-[180px] flex-1">
        <Topbar />

        <div className="p-3">
          {children}
        </div>
      </main>
    </div>
  );
}