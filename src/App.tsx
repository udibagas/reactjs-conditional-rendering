import BookList from "./components/BookList";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import useAuth from "./hooks/useAuth";

const user = {
  name: "Admin",
  email: "admin@mail.com",
  password: "admin123"
}

export default function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div>
      {isLoggedIn && <Header user={user} />}
      {isLoggedIn ? <BookList /> : <Register />}
    </div>
  )
}