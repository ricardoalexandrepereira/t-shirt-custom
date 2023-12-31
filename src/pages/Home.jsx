import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import {useSnapshot} from "valtio"
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from "../config/motion"
import state from '../store'
import threejs from "/threejs.png"

import {CustomButton} from "../components"

const Home = () => {

    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation("left")}>
                <motion.header {...slideAnimation("down")}>
                    <img style={{width:"70px",}} className='w-20 h-20' src={threejs} alt="logo" />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>LET'S <br className='xl:block hidden'/> DO IT.</h1>
                    </motion.div>
                    <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                        
                        <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new 3D Customization tool. <strong>Unleash your imagination</strong> and define your own style with <span className='text-base text-blue-600 font-bold'>blue cow.</span></p>
                        
                        <CustomButton type="filled" title="Customize It" handleClick={()=> state.intro = false} customStyles="w-fit px-4 py-2.5 bg-yellow-400 font-bold text-sm"/>
                    
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home