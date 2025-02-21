import { useNavigate, useParams } from "react-router"
import Button from "../components/UI/Button"
import books from '../stores/books.json'
import { BookType } from "../components/BookItem"

export default function Book() {
  // const location = useLocation()
  const navigate = useNavigate()
  // const book = location.state.book
  const { id } = useParams<{ id: string }>()
  const book: BookType = books.find(book => book.id === parseInt(id as string))!

  return (
    <div className="container mx-auto my-8">
      <img src={book.imageUrl} alt="" />
      <div className="p-4 flex flex-col justify-between items-baseline">
        <h3 className="font-bold dark:text-white">{book.title}</h3>
        <div className="text-slate-400 mb-4">{book.author}</div>

        <Button label="Back" onClick={() => navigate(-1)} />
      </div>
    </div>
  )
}