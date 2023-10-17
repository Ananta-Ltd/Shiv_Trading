"useclient"
import React,{  useEffect, useRef} from 'react'
import { motion, useInView, useAnimate, useAnimation} from 'framer-motion';

function Reveal({children}) {
    
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
    },[isInView]);

  return (
    <div ref={ref} >
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1,  delay:0.25}}
        >
           {children}
        </motion.div>
    </div>
  )
}

export default Reveal
