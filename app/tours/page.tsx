
type Tours = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

const url = 'https://www.course-api.com/react-tours-project';

const ToursPage = async () => {

    const response = await fetch(url)
    const data: Tours[] = await response.json()
    console.log(data)
  return (
    <div>
      <h1 className="text-5xl font bold">ToursPage</h1>
      {data.map(item=>(
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  )
}

export default ToursPage