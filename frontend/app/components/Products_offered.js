"useclient"
import React,{  useEffect, useRef} from 'react'
import { motion, useInView, useAnimation} from 'framer-motion';

function Products() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const mainControls = useAnimation();

  useEffect(() => {
      if(isInView) {
          mainControls.start("visible");
      }
  },[isInView]);

  return (
    <>
      <div ref={ref} >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1,  delay:0.25}}
        >
           <div className=" p-2 m-12 h-auto md:h-[500px] ">
       
            <div className="flex justify-center">
                <h1 className="font-semibold text-[24px]  tracking-[2px] text-center "> EXPLORE OUR WALL TILES </h1>     
                <div className="bg-gray-500 h-0.5 w-[220px] mt-11 absolute center"></div>
              </div>
            
              <div className="block md:flex justify-center">
                <div className="mt-9 p-7 mx-4 w-[250px] h-[405px] bg-blue-950">
                  <p className="text-white w-fit">What are the wall tiles called?
                      The 12 Different Types of Tiles, Explained by Pros
                      Ceramic and porcelain tiles are the most commonly used, 
                      but there are also glass tiles, cement tiles, metal tiles, and stone tiles—to name just a few.
                  </p>
            </div>
            
            <div>
            <div className="block md:flex lg:flex justify-center mt-9 mb-1">
              <div className="bg-blue-950 h-[200px] w-[250px] mx-1 mb-1 md:mb-0 lg:mb-0"></div>
              <div className="bg-blue-950 h-[200px]  w-[250px] md:w-[500px]"></div>
            </div>
            <div className="block md:flex lg:flex justify-center mb-9">
              <div className="bg-blue-950 h-[200px]  w-[250px] md:w-[500px] mx-1 mb-1 md:mb-0 lg:mb-0"></div>
              <div className="bg-blue-950 h-[200px] w-[250px] "></div>
            </div>
            </div>
          </div>
            </div>
              <div className=" p-2 m-12 h-auto md:h-[500px] ">
              <div className="flex justify-center">
              <h1 className="font-semibold text-[24px]  tracking-[2px] text-center "> EXPLORE OUR FLOOR TILES </h1>     
              <div className="bg-gray-500 h-0.5 w-[220px] mt-11 absolute center"></div>
              </div>
          <div className="block md:flex justify-center">
            
            <div>
            <div className="block md:flex lg:flex justify-center mt-9 mb-1">
              <div className="bg-blue-950 h-[200px] w-[250px] mx-1 mb-1 md:mb-0 lg:mb-0"></div>
              <div className="bg-blue-950 h-[200px]  w-[250px] md:w-[500px]"></div>
            </div>
            <div className="block md:flex lg:flex justify-center mb-9">
              <div className="bg-blue-950 h-[200px]  w-[250px] md:w-[500px] mx-1 mb-1 md:mb-0 lg:mb-0"></div>
              <div className="bg-blue-950 h-[200px] w-[250px] "></div>
            </div>
            </div>
            <div className="mt-9 p-7 mx-4 w-[250px] h-[405px] bg-blue-950">
              <p>lorem 
              </p>
            </div>
          </div>
        
            </div>
        </motion.div>
    </div>
     
    </>
  );
}
export default Products;
