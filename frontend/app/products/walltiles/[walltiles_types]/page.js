'use client';
import useFetch from '@/app/useFetch';
import { usePathname } from 'next/navigation';

export default function page() {
  const currentPage = usePathname();
  const sliced = currentPage.slice(20);
  const room = sliced.charAt(0).toUpperCase() + sliced.slice(1);
  const url="Wall Tiles";
  const {data:photos, loading, error} = useFetch(`http://localhost:8000/tiles/?product=${url}&room=${room}`)
  if(loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);

  return (
    <> 
    <p>home--products--walltiles--{room}</p>
         <div className='  p-6 md:ml-0 m-2  h-auto  grid grid-cols-1 ml-16  gap-6 md:grid md:grid-cols-3 md:gap-8 overflow-hidden'>
        {photos.map((photo, index) => ( 
          <div className="border-2 border-gray-100 hover:shadow-lg hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300">
             <div className='flex items-center justify-center'>
           <img key={index} src={photo} alt="wall" className='h-[200px]'/> 
           </div>
          <div className='bg-gray-500 h-[50px]  text-center'> <p className='pt-3'>WALL TILES</p></div>
          </div> 
  
        ))}
         </div>
      
    </>
    );
}



