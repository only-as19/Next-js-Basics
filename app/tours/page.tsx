import Link from "next/link";

type Tours = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

const customFetch = async () => {
    await new Promise((resolve)=> setTimeout(resolve,3000))
    const response = await fetch(url)
    const data: Tours[] = await response.json()
    return data
}

const url = 'https://www.course-api.com/react-tours-project';

const ToursPage = async () => {
    const data = await customFetch()
  return (
    <div>
      <h1 className="text-5xl font bold">ToursPage</h1>
      {data.map(item=>(
        <Link key={item.id} href={`tours/${item.id}`}>
        <h2 >{item.name}</h2>
        </Link>
      ))}
    </div>
  )
}

export default ToursPage