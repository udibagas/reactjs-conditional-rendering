import { BrowserRouter, Route, Routes } from "react-router";
import BookList from "./pages/BookList";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
import Book from "./pages/Book";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { persistor, store } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";
import PostList from "./pages/PostList";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout><ProtectedRoute /></MainLayout>}>
              <Route index element={<BookList />} />
              <Route path="/books/:id" element={<Book />} />
              <Route path="/posts" element={<PostList />} />
            </Route>

            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}