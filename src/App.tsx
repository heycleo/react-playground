import Layout from "@/components/layout/layout";
import Home from "@/pages/home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
