import { useNavigate } from "react-router";
import Button from "./UI/Button";

export type BookType = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

export default function BookItem({ book }: { book: BookType }) {
  const navigate = useNavigate()

  function handleReadMore() {
    navigate(`/books/${book.id}`)
  }

  return (
    <>
      <img src={book.imageUrl} alt="" />
      <div className="p-4 flex flex-col justify-between items-baseline">
        <h3 className="font-bold dark:text-white">{book.title}</h3>
        <div className="text-slate-400 mb-4">{book.author}</div>
        <Button onClick={handleReadMore} label="Read More" />
      </div>
    </>
  )
}