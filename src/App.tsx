import { BrowserRouter, Route, Routes } from "react-router";
import BookList from "./pages/BookList";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
import Book from "./pages/Book";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><ProtectedRoute /></MainLayout>}>
          <Route index element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
        </Route>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}