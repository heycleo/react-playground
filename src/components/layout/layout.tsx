import Header from "@/components/layout/header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
