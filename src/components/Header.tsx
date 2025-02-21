import { useNavigate } from "react-router"

export default function Header() {
  const navigate = useNavigate()

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">
        Book Library
      </div>

      <div className="flex gap-4 justify-center items-center">
        <div>Welcome, Admin!</div>
        <a href="#" onClick={logout}>Logout</a>
        <button className="border border-white rounded py-1 px-3 cursor-pointer" onClick={() => {
          document.body.classList.toggle('dark')
        }}>Toggle Theme</button>
      </div>
    </header>
  )
}