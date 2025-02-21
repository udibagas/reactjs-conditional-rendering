import { BrowserRouter, Route, Routes } from "react-router";
import BookList from "./pages/BookList";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><BookList /></MainLayout>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}