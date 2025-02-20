import { useEffect, useRef, useState } from "react"

type LoginFormProps = {
  onLogin: (email: string, password: string) => void;
  error?: string;
}

export default function LoginForm({ onLogin, error }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onLogin(email, password)
  }

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form onSubmit={handleSubmit} className=" bg-white p-8 w-[350px] rounded-lg shadow-lg">
        <h1 className="text-3xl mb-8">Login</h1>
        {error && <div className="bg-red-50 text-red-400 px-4 py-2 mb-4 rounded-lg">{error}</div>}

        <div className="mt-4">
          <label htmlFor="Email" className="font-bold mb-2 block">Email</label>
          <input
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="border border-slate-300 py-2 px-4 rounded-md w-full" />
        </div>

        <div className="mt-4">
          <label htmlFor="Password" className="font-bold mb-2 block">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-slate-300 py-2 px-4 rounded-md w-full" />
        </div>

        <div className="mt-8">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">Login</button>
        </div>
      </form>
    </div>
  )
}