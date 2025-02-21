export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form className="flex flex-col gap-4 bg-white p-8 w-[350px] rounded-lg shadow-lg">
        <h1 className="text-3xl">Register</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border border-slate-200 py-1 px-3 rounded-md dark:bg-slate-800 dark:text-white hover:border-slate-300 hover:bg-slate-50 focus:border-slate-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-slate-200 py-1 px-3 rounded-md dark:bg-slate-800 dark:text-white hover:border-slate-300 hover:bg-slate-50 focus:border-slate-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border border-slate-200 py-1 px-3 rounded-md dark:bg-slate-800 dark:text-white hover:border-slate-300 hover:bg-slate-50 focus:border-slate-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="border border-slate-200 py-1 px-3 rounded-md dark:bg-slate-800 dark:text-white hover:border-slate-300 hover:bg-slate-50 focus:border-slate-300"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            className="border border-slate-200 py-1 px-3 rounded-md dark:bg-slate-800 dark:text-white hover:border-slate-300 hover:bg-slate-50 focus:border-slate-300"
          />
        </div>

        <button className="mt-4 border border-blue-500 text-blue-500 py-1 px-3 rounded-md cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}
