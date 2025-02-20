import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick')
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="text-2xl dark:text-white">{time.toLocaleTimeString()}</div>
  )
}