import { useRef, useState } from "react";

export default function SopWatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        console.log("Tick");
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetTimer() {
    stopTimer()
    setTime(0)
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl mb-6 dark:text-white">{time}</h1>

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={startTimer}
        >
          Start
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={stopTimer}
        >
          Stop
        </button>


        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={resetTimer}
        >
          Reset
        </button>

      </div>
    </div>
  );
}
