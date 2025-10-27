const page = async ({params}: {params:Promise<{id:string}>}) => {
    const {id} = await params

  return (
    <div>
      <h1 className='text-4xl'>ID : {id}</h1>
    </div>
  );
  
}

export default page
