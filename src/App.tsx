import BookList from "./components/BookList";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import useAuth from "./hooks/useAuth";

const user = {
  name: "Admin",
  email: "admin@mail.com",
  password: "admin123"
}

export default function App() {
  const { isLoggedIn, setIsLoggedIn, setError, error } = useAuth()

  function handleLogin(email: string, password: string) {
    if (email !== user.email || password !== user.password) {
      setError('Invalid username or password')
      return
    }

    setError('')
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
  }

  // function render() {
  //   // if (isLoggedIn) {
  //   //   return <BookList />
  //   // } else {
  //   //   return <LoginForm onLogin={handleLogin} />
  //   // }

  //   switch (isLoggedIn) {
  //     case true:
  //       return <BookList />
  //     case false:
  //       return <LoginForm onLogin={handleLogin} />
  //   }
  // }

  return (
    <div>
      {isLoggedIn && <Header user={user} onLogout={handleLogout} />}
      {isLoggedIn ? <BookList /> : <LoginForm onLogin={handleLogin} error={error} />}
    </div>
  )
}