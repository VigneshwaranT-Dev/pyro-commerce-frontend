import { Header, Footer } from "@/shared/components";
import BottomNav from "@/shared/components/BottomNav";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen pb-28 sm:pb-0 flex flex-col bg-[#f1f5eb]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default MainLayout;
