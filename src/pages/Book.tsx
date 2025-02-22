import { useNavigate, useParams } from "react-router";
import Button from "../components/UI/Button";
import books from "../stores/books.json";
import { BookType } from "../components/BookItem";

export default function Book() {
  // const location = useLocation()
  // const book = location.state.book
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const book: BookType = books.find(
    (book) => book.id === parseInt(id as string)
  )!;

  return (
    <div className="w-2/3 flex gap-4 m-auto my-8 dark:text-white">
      <img src={book.imageUrl} alt="" />
      <div className="p-4 flex flex-col justify-between items-baseline">
        <h3 className="font-bold dark:text-white">{book.title}</h3>
        <div className="text-slate-400 mb-4">{book.author}</div>

        <p className="text-slate-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quisquam placeat ipsa eos? Perspiciatis sequi quasi aspernatur, iure
          ea quam, eum ex cum numquam adipisci maxime molestiae laborum, quod
          repudiandae?
        </p>

        <p className="text-slate-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quisquam placeat ipsa eos? Perspiciatis sequi quasi aspernatur, iure
          ea quam, eum ex cum numquam adipisci maxime molestiae laborum, quod
          repudiandae?
        </p>

        <p className="text-slate-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quisquam placeat ipsa eos? Perspiciatis sequi quasi aspernatur, iure
          ea quam, eum ex cum numquam adipisci maxime molestiae laborum, quod
          repudiandae?
        </p>

        <p className="text-slate-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quisquam placeat ipsa eos? Perspiciatis sequi quasi aspernatur, iure
          ea quam, eum ex cum numquam adipisci maxime molestiae laborum, quod
          repudiandae?
        </p>

        <Button label="Back" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}
