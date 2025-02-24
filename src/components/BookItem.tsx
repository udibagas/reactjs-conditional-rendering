import { useNavigate } from "react-router";
import Button from "./UI/Button";
import useLocale from "../hooks/useLocale";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

export type BookType = {
  id: number;
  title: string;
  title_id: string;
  author: string;
  imageUrl: string;
}

export default function BookItem({ book }: { book: BookType }) {
  const navigate = useNavigate()
  // const { locale } = useLocale()
  const locale = useSelector((state: RootState) => state.locale.locale)

  function handleReadMore() {
    navigate(`/books/${book.id}`)
  }

  return (
    <>
      <img src={book.imageUrl} alt="" />
      <div className="p-4 flex flex-col justify-between items-baseline">
        <h3 className="font-bold dark:text-white">{locale == 'id' ? book.title_id : book.title}</h3>
        <div className="text-slate-400 mb-4">{book.author}</div>
        <Button onClick={handleReadMore} label="Read More" />
      </div>
    </>
  )
}