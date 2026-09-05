import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    // 1. Fixed viewport container that prevents window scrolling
    <div className="px-4 py-10 h-dvh w-screen bg-[#232324] border overflow-hidden flex items-center">
      <div className="w-full h-full md:flex md:gap-3 lg:gap-8 lg:px-24 bg-[#232324] text-white overflow-hidden">
        
        {/* Fixed Left Sidebar */}
        <Sidebar />

        {/* 2. Scrollable Middle Content Container */}
        <div className="flex-1 h-full min-h-0 overflow-y-auto animate-fadeIn">
          <Outlet />
        </div>

        {/* Fixed Right Sidebar */}
        <RightSidebar />

      </div>
    </div>
  );
}