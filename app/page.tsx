import Link from "next/link"

const Homepage = () => {
  return (
    <div>
      <h1 className="text-5xl font bold">HomePage</h1>
      <Link href="/about" className="text-blue-500 text-lg inline-block mt-2">About page</Link>
    </div>
  )
}

export default Homepage
