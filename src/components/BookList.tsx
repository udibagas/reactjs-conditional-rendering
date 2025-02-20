import { useState } from "react";
import books from "../stores/books.json";
import BookItem from "./BookItem";

export default function BookList() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const keyword = e.target.value

    if (keyword === "") {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter((book) => {
      return book.title.toLowerCase().includes(keyword.toLowerCase())
    })

    setFilteredBooks(filtered)
  }

  return (
    <>
      <h1 className="text-center text-3xl my-6">Programming Book List</h1>

      <div className="text-center my-8">
        <input
          type="text"
          placeholder="Search book"
          className="border border-slate-200 py-2 px-4 rounded-lg w-[400px]"
          onChange={handleChange}
        />
      </div>

      <div className="w-2/3 m-auto flex flex-wrap gap-4 justify-center">
        {filteredBooks.map((book) => {
          return (
            <BookItem book={book} key={book.id} />
          )
        })}
      </div>
    </>
  )
}