import { Link, useNavigate } from "react-router"
import useLocale from "../hooks/useLocale"
// import { useSelector } from "react-redux"
// import { RootState } from "../stores/store"

export default function Header() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') ?? '{}')
  const { locale, setLocale } = useLocale()
  // const locale = useSelector((state: RootState) => state.locale.locale)

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">
        <Link to="/">
          {locale == 'id' ? 'Pustaka Buku' : 'Book Library'}
        </Link>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <div>{locale == 'id' ? 'Selamat Datang' : 'Welcome'}, {user.name}!</div>
        <a href="#" onClick={logout}>
          {locale == 'id' ? 'Keluar' : 'Logout'}
        </a>
        <button className="border border-white rounded py-1 px-3 cursor-pointer" onClick={() => {
          document.body.classList.toggle('dark')
        }}>
          {locale == 'id' ? 'Ubah Tema' : 'Toggle Theme'}
        </button>

        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="id">Indonesia</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  )
}