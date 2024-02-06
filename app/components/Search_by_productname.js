"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Search_by_productname() {

  const currentPage = usePathname();
  const router = useRouter();

  return (
    <div>
      <div className=' mx-5 mb-0 p-2 text-sm w-[300px] md:w-[400px]'>
        <h2 className='bg-gray-400 p-1 shadow-sm'>Search By Category</h2>
        <div className=' my-1'>
          <label>
            <input
              className="mx-2"
              type="checkbox"
              checked={currentPage === "/products/walltiles"
                || currentPage === "/products/walltiles/bathroom"
                || currentPage === "/products/walltiles/kitchen"
                || currentPage === "/products/walltiles/livingroom"
                || currentPage === "/products/walltiles/outdoor"
                || currentPage === "/products/walltiles/bedroom"}
              onChange={()=>{ router.push('/products/walltiles')}}
            />
            Wall Tiles
          </label>
        </div>
        <hr />
        <div className=' my-1'>
          <label>
            <input
              className="mx-2"
              type="checkbox"
              checked={currentPage === "/products/floortiles"
                || currentPage === "/products/floortiles/bathroom"
                || currentPage === "/products/floortiles/kitchen"
                || currentPage === "/products/floortiles/livingroom"
                || currentPage === "/products/floortiles/outdoor"
                || currentPage === "/products/floortiles/bedroom"}
              onChange={()=>{router.push('/products/floortiles')}}
            />
            Floor Tiles
          </label>
        </div>
        <hr />
        <div className=' my-1'>
          <label>
            <input
              className="mx-2"
              type="checkbox"
              checked={currentPage === "/products/sanitaryandcp_fittings"
                || currentPage === "/products/sanitaryandcp_fittings/Single%20Piece%20Basin"
                || currentPage === "/products/sanitaryandcp_fittings/Two%20Piece%20Basin"
                || currentPage === "/products/sanitaryandcp_fittings/Counter%20Basin"
                || currentPage === "/products/sanitaryandcp_fittings/Wall%20Hung%20Commod"
                || currentPage === "/products/sanitaryandcp_fittings/Single%20Vacuum%20commod"
                || currentPage === "/products/sanitaryandcp_fittings/Double%20Vacuum%20commod"}
              onChange={()=>router.push('/products/sanitaryandcp_fittings')}
            />
            Sanitary and C.P. Fittings
          </label>
        </div>
        <hr />
        <div className=' my-1'>
          <label>
            <input
              className="mx-2"
              type="checkbox"
              checked={currentPage === "/products/granitesandmarbles"
                || currentPage === "/products/granitesandmarbles/Rajasthani"
                || currentPage === "/products/granitesandmarbles/South%20Indian"
                || currentPage === "/products/granitesandmarbles/North%20Indian"}
              onChange={()=>{router.push('/products/granitesandmarbles')}}
            />
            Granite and Marbles
          </label>
        </div>
      </div>
    </div>
  )
}
export default Search_by_productname;