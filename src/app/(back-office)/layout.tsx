import Navbar from "@/components/backOffice/dashboard/Navbar";
import Sidebar from "@/components/backOffice/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar></Sidebar>
      <div className="w-full">
        {/* Header */}
        <Navbar></Navbar>
        <main className="p-8 bg-slate-950 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
      {/* Main Body */}
    </div>
  );
}
