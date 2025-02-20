import Button from "./Button";

type Book = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

export default function BookItem({ book }: { book: Book }) {
  function handleReadMore() {
    alert(book.title)
  }

  return (
    <div className="border border-slate-300 w-[320px] rounded-lg" key={book.id}>
      <img src={book.imageUrl} alt="" />
      <div className="p-4">
        <h3 className="font-bold dark:text-white">{book.title}</h3>
        <div className="text-slate-400 mb-4">{book.author}</div>
        <Button onSmash={handleReadMore} label="Read More" />
      </div>
    </div>
  )
}