import { useEffect, useState } from "react";
import books from "../stores/books.json";
import BookItem from "./BookItem";

export default function BookList() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [author, setAuthor] = useState('')

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

  // dijalankan ketika komponen pertama kali di-render
  useEffect(() => {
    console.log('Component is mounted')
    // fetch external data
  }, [])

  useEffect(() => {
    console.log('Dijalankan ketika author berubah', author)
    if (author === '') {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter((book) => {
      return book.author === author
    })

    setFilteredBooks(filtered)
  }, [author])

  return (
    <>
      <h1 className="text-center text-3xl my-6 dark:text-white">Programming Book List</h1>

      <div className="text-center my-8">
        <input
          type="text"
          placeholder="Search book"
          className="border border-slate-200 py-2 px-4 rounded-lg w-[400px] dark:bg-slate-800 dark:text-white mr-2"
          onChange={handleChange}
        />

        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-slate-200 py-2 px-4 rounded-lg w-[400px] dark:bg-slate-800 dark:text-white">
          <option value="">--Select Author--</option>
          <option value="Andrew Hunt and David Thomas">
            Andrew Hunt and David Thomas
          </option>
          <option value="Robert C. Martin">
            Robert C. Martin
          </option>
          <option value="Kyle Simpson">
            Kyle Simpson
          </option>
          <option value="Douglas Crockford">
            Douglas Crockford
          </option>
        </select>
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