import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto flex justify-center gap-x-3 py-4 px-2">
        <Link href='/'>Home</Link>
        <Link href='/info'>Info</Link>
        <Link href='/about'>About</Link>
        <Link href='/counter'>Counter</Link>
        <Link href='/tours'>Tours</Link>
    </nav>
  )
}

export default Navbar
