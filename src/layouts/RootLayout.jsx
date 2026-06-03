import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";





export default function RootLayout() {

    return (
        <div className='md:h-screen bg-[#232324] border overflow-hidden flex items-center'>
            <div className="w-full md:h-9/10 my-auto md:flex gap-8 md:px-24 bg-[#232324] text-white">
                <Sidebar />
                <div className="flex-1 animate-fadeIn">
                    <Outlet />
                </div>
                <RightSidebar />
            </div>
        </div>
    )
}