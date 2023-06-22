"use client"
import useFetch from '@/app/useFetch';

const page = () =>{
  const url="Wall Tiles";
  const room = "Bathroom"
  const {data:photos, loading, error} = useFetch(`http://localhost:8000/tiles/?product=${url}&room=${room}`)
  if(loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);
  return (
  <> 
       <div className='  p-6 m-2  h-auto  grid grid-cols-3 gap-8 overflow-hidden'>
      {photos.map((photo, index) => ( 
        <div className="border-2 border-gray-100 hover:shadow-lg hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300">
           <div className='flex items-center justify-center'>
         <img key={photo.index} src={photo} alt="wall" className='h-[200px]'/> 
         </div>
        <div className='bg-gray-500 h-[50px]  text-center'> <p className='pt-3'>WALL TILES</p></div>
        </div> 

      ))}
       </div>
    
  </>
  );
};

export default page;
