import Header from "@/components/layout/header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <main className="px-4 md:px-6">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
