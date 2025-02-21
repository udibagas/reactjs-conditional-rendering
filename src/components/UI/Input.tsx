import React from "react";

type InputProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  className?: string;
};

export default function Input({
  id,
  type = "text",
  placeholder,
  onChange,
  ref,
  className,
}: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return (
    <>
      <input
        id={id}
        ref={ref}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={
          `border 
          border-slate-200
          py-1
          px-3
          rounded-md
          dark:bg-slate-800
          dark:text-white 
          hover:border-slate-300
          hover:bg-slate-50
          focus:border-slate-300
          ${className}`
        }
      />
    </>

  );
}
