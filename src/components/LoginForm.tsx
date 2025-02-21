import { useEffect, useRef, useState } from "react"
import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";
import { z } from 'zod'

type LoginFormProps = {
  onLogin: (email: string, password: string) => void;
  error?: string;
}

export default function LoginForm({ onLogin, error }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef<HTMLInputElement | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(email, password)

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    })

    const result = schema.safeParse({ email, password })

    if (!result.success) {
      const formattedError = Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(([key, value]) => {
          return [key, value?.[0] || '']
        })
      )

      setErrors(formattedError)
      return
    }

    setErrors({})
    onLogin(email, password)
  }

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form onSubmit={handleSubmit} className=" bg-white p-8 w-[350px] rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6">Login</h1>
        {error && <div className="bg-red-50 text-red-400 px-4 py-2 mb-4 rounded-lg">{error}</div>}

        <div className="my-4">
          <Label htmlFor="email">Email</Label>
          <Input
            className="w-full"
            ref={emailRef}
            id="email"
            value={email}
            error={errors.email}
            onChange={(v) => setEmail(v)}
            placeholder="Email" />
        </div>

        <div className="my-4">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full"
            id="password"
            value={password}
            error={errors.password}
            onChange={(v) => setPassword(v)}
            type="password"
            placeholder="Password" />
        </div>

        <div className="mt-8">
          <Button label="Login" className='w-full' />
        </div>
      </form>
    </div>
  )
}