import { BrowserRouter, Route, Routes } from "react-router";
import BookList from "./pages/BookList";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
import Book from "./pages/Book";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import LangProvider from "./providers/LangProvider";
import { Provider } from "react-redux";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><ProtectedRoute /></MainLayout>}>
            <Route index element={<BookList />} />
            <Route path="/books/:id" element={<Book />} />
          </Route>

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}