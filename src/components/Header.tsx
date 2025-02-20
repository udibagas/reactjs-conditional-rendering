type User = {
  name: string;
  email: string;
  password: string;
}

type HeaderProps = {
  user: User;
  onLogout: () => void;
}

export default function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">
        Book Library
      </div>

      <div className="float-right">
        Welcome, {user.name}! | <a href="#" onClick={onLogout}>Logout</a>
      </div>
    </header>
  )
}