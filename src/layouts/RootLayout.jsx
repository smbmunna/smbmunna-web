import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";





export default function RootLayout() {

    return (
        <div className='flex gap-8 h-screen px-24 bg-[#232324] text-white border overflow-hidden'>

            <Sidebar />
            <div className="flex-1 animate-fadeIn">
                <Outlet/>
            </div>
            <RightSidebar />
        </div>
    )
}