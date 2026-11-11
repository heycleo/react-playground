import Layout from "@/components/layout/layout";
import TodoList from "@/pages/demos/todo-list";
import Home from "@/pages/home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/demo/todo-list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
