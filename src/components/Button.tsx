type ButtonProps = {
  onSmash: () => void;
  label: string;
}

export default function Button({ onSmash, label }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white rounded py-2 px-4"
      onClick={onSmash}
    >
      {label}
    </button>
  )
}