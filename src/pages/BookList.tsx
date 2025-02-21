import { useEffect, useRef, useState } from "react";
import books from "../stores/books.json";
import BookItem from "../components/BookItem";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useSearchParams } from "react-router";

export default function BookList() {
  console.log('BookList rendered')
  const [filteredBooks, setFilteredBooks] = useState(books);
  const authorRef = useRef<HTMLSelectElement>(null)
  const logRef = useRef<string[]>([])

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const keyword = searchParams.get('keyword')

    if (!keyword) {
      setFilteredBooks(books)
      return
    }

    const filtered = books.filter((book) => {
      return book.title.toLowerCase().includes(keyword.toLowerCase())
    })

    setFilteredBooks(filtered)
  }, [searchParams])



  function handleChange(value: string) {
    const keyword = value

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
      <h1 className="text-center text-3xl my-6 dark:text-white">Programming Book List</h1>

      <div className="flex gap-2 justify-center my-8">
        <Input placeholder="Search book" onChange={handleChange} className="w-[300px]" />

        <select
          ref={authorRef}
          className="border border-slate-200 px-3 rounded-lg dark:bg-slate-800 dark:text-white">
          <option value="">--Select Author--</option>
          {Array.from(new Set(books.map(book => book.author))).map((author) => {
            return (
              <option key={author} value={author}>{author}</option>
            )
          }
          )}
        </select>

        <Button label="Search" onClick={() => {
          const author = authorRef.current?.value
          if (!author) {
            setFilteredBooks(books)
            return
          }

          const filtered = books.filter((book) => {
            return book.author === author
          })

          setFilteredBooks(filtered)
        }} />
      </div>

      <div className="max-w-[1024px] m-auto flex flex-wrap gap-8 justify-center">
        {filteredBooks.map((book) => {
          return (
            <div className="border border-slate-300 w-[320px] rounded-lg" key={book.id} onClick={() => {
              console.log('Book clicked', book.title)
              logRef.current.push(book.title)
              console.log(logRef.current)
            }}>
              <BookItem book={book} />
            </div>
          )
        })}

        {filteredBooks.length === 0 && (
          <div className="text-center w-full dark:text-white">No book found</div>
        )}
      </div>
    </>
  )
}